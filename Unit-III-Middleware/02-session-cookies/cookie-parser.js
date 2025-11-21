/*
 * express/cookie-parser.js
 * Purpose: demonstrates using `cookie-parser` to set, read and clear cookies.
 * How to run:
 *   1. cd express
 *   2. npm install cookie-parser express
 *   3. node cookie-parser.js
 *   4. Open http://localhost:3013 and use the routes `/set-cookie`, `/get-cookie`, `/delete-cookie`.
 */

var express = require('express')
var obj = new express()
//cookies parser
//command// npm i cookie-parser
var cookieParser = require('cookie-parser')
obj.use(cookieParser())

//to get route
obj.get('/set-cookie', (req, res) => {
  res.cookie('theme', 'dark')
  res.send('cookies have been sent')
})

//one more route to fetch cookie
obj.get('/get-cookie', (req, res) => {
  var cookieName = req.cookies.theme
  res.send(`The fetched cookies is ${cookieName}`)
})

//to delete cookies
obj.get('/delete-cookie', (req, res) => {
  res.clearCookie('theme')
  res.send('cookies cleared, try to fetch again')
})
//server port
obj.listen(3013, () => {
  console.log('server iss running in the port no 3013')
})
