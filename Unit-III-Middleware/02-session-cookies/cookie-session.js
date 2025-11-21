/*
 * express/cookie-session.js
 * Purpose: demonstrates basic usage of `cookie-session` to store small session data
 * on the client side.
 * How to run:
 *   1. cd express
 *   2. npm install cookie-session express
 *   3. node cookie-session.js
 *   4. Visit `/set-session`, `/get-session`, `/delete-session` on port 3001.
 */

//set a server a client side
var express = require('express')
var obj = new express()

//to install  cookie-session command (npm i cookie-session)
var cookieSession = require('cookie-session')
obj.use(
  cookieSession({
    name: 'session',
    maxAge: 5 * 60 * 100, // session willl bee active till 5 min
    keys: ['secret-key'],
  })
)

//cookie information
obj.get('/set-session', (req, res) => {
  ;(req.session.username = 'arwin'), (req.session.city = 'patiala')
  res.send('session is set')
})

//now fetch it

obj.get('/get-session', (req, res) => {
  username = req.session.user
  city = req.session.city
  res.send(`session fetched and te valuse is ${username} and ${city}`)
})

//now delete

obj.get('/delete-session', (req, res) => {
  req.session = null
  res.send('session deleted succesfully')
})

obj.listen(3001, () => {
  console.log('Port no 3001  is running')
})
