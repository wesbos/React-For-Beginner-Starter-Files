![](https://wes.io/dgAQ/content)

# React For Beginners — [ReactForBeginners.com](https://ReactForBeginners.com)

Starter files for the React For Beginners course. Come <a href="https://ReactForBeginners.com/">Learn React</a> with me!

The code in this repo meant to be a reference point for anyone following along with the video course.

## To Start

**Note** - One of the dependencies is Xcode. While installing, if you run into an error that says, `gyp: No Xcode or CLT version detected!` please do the following:
1. Execute `xcode-select --install` in terminal.
2. Delete the "node_modules" folder located within the "catch-of-the-day" folder.
3. Execute `npm install` once more.

`cd` into `catch-of-the-day` and follow along with the videos

Each numbered folder in `stepped-solutions` contains the files for the beginning of each correspondingly numbered video, should you need them. So, if you need any code, pull the appropriate file into your `catch-of-the-day` folder.

You are welcome to submit Pull Requests, but I'd like to keep the code as similar as possible to the course content.

### Code Use

You are welcome to use this code in your own applications. If you would like to use it for training purposes, please shoot me a message first to make sure it's okay.

# Frequently Asked Questions

#### :question: I can't see the React tab in my dev tools

Restart your dev tools or your chrome browser entirely. They will only show up when you are viewing a React app - so make sure you test it on Facebook or another website that is running React. It won't work on your empty `main.js` file until you `import React from 'react'`.

#### :question: `npm start` doesn't update the app on file save, or doesn't run correctly.

There may be a few different causes for this:

* Webpack currently can't handle folder/file names that contain parentheses.
* Webpack also has problems running inside folders for Dropbox/Google Drive type services. Git is recommended for keeping your files in sync across multiple computers.

#### :question: I get `permission_denied` warnings in my console when setting up Firebase

Be sure to select "Realtime database" as your database type inside Firebase. If you created your database as a Cloud Firestore type, you can change it in the Database tab.

#### :question: I can't log in to the store after I deployed to Netlify/Apache

Firebase by default only allows logins from localhost or the Firebase website. You'll need to add your deploy URL to the Authorized Domains in the Sign-in method area of your Firebase console.

## Changes In the 2018 RE-Record

In March 2018 I re-recorded this course. Here are the things that I've updated.

* Upgrade to React Router 4 Final API
* Use React 16.3
* Move to external PropTypes Package
* Use React's new Refs API, remove function refs
* Remove all use of constructors and super() - use class properties instead
* Better explain binding, use of `this` and component instances
* Moved from React-addons-css-transition-group to react-transition-group and upgraded from 1.x to 2.x
* Use official Firebase package for Auth as re-base is now only for data binding
* Move promise based code to async/await
* Show how to return multiple elements with React.Fragment

## htaccess

Here is the .htaccess file we use in the apache deployment video

```
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```
