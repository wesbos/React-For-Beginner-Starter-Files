import firebase from 'firebase'
import base, { firebaseApp } from '../base.js'
import { useState, useEffect } from 'react'

const AUTH = Object.freeze({
  IsLoggedOut: Symbol('IsLoggedOut'),
  IsUser: Symbol('IsUser'),
  IsOwner: Symbol('IsOwner')
})

/// useAuth takes a storeId, and returns the status of that user
const useAuth = storeId => {
  const [uid, setUid] = useState(null)
  const [owner, setOwner] = useState(null)

  // We have authenticated
  const authHandler = async auth => {
    if (!auth) return
    const uid = auth.user ? auth.user.uid : null

    const store = await base.fetch(storeId, { context: this }) // TODO ????

    if (!store.owner) await base.post(`${storeId}/owner`, { data: uid })

    setUid(uid)
    setOwner(store.owner || uid)
  }

  // Try to auth on first mount silently, in case of refresh
  useEffect(() => firebase.auth().onAuthStateChanged(authHandler), [])

  const login = provider => {
    const authProvider = (() => {
      switch (provider) {
        case 'Github':
          return new firebase.auth.GithubAuthProvider()
        default:
          return Error(`unknown auth provider '${provider}'`)
      }
    })()

    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(authHandler)
  }

  const logout = async () => {
    await firebase.auth().signOut()
    setUid({ uid: null })
  }

  let status = AUTH.IsLoggedOut
  if (uid) {
    status = uid === owner ? AUTH.IsOwner : AUTH.IsUser
  }

  return [{ status }, { login, logout }]
}

export { useAuth, AUTH }
