import React from 'react'

class AddFishForm extends React.Component {
  nameRef = React.createRef()
  priceRef = React.createRef()
  isAvailableRef = React.createRef()
  descRef = React.createRef()
  imageRef = React.createRef()

  createFish = event => {
    event.preventDefault()
    const { addFish } = this.props
    addFish({
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      isAvailable: this.isAvailableRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    })
    event.currentTarget.reset()
  }

  render() {
    return (
      <form className='fish-edit' onSubmit={this.createFish}>
        <input name='name' ref={this.nameRef} type='text' placeholder='Name' />
        <input
          name='price'
          ref={this.priceRef}
          type='text'
          placeholder='Price'
        />
        <select name='isAvailable' ref={this.isAvailableRef}>
          <option value='available'>Fresh</option>
          <option value='unavailable'>Sold Out</option>
        </select>
        <textarea
          name='desc'
          ref={this.descRef}
          type='text'
          placeholder='Description'
        />
        <input
          name='image'
          ref={this.imageRef}
          type='text'
          placeholder='Image'
        />
        <button type='submit'>+ Add Fish</button>
      </form>
    )
  }
}

export { AddFishForm }
