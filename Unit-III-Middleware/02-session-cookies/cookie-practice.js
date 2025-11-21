/*
 * express/practicecooki-parser.js
 * Purpose: demonstrates using `cookie-parser` to set, read and clear cookies.
 * How to run:
 *   1. cd express
 *   2. npm install express cookie-parser
 *   3. node practicecooki-parser.js
 *   4. Open http://localhost:3014 to view the form and try set/get/delete cookie flows.
 */

var express = require('express')
var obj = new express()
var cookieParser = require('cookie-parser')
obj.use(cookieParser())
obj.use(express.urlencoded({ extended: true }))
//imported html file
obj.get('/', (req, res) => {
  res.sendFile(__dirname + '/practicecp.html')
})

//to fetch cookie and display the cookie

obj.post('/set-cookie', (req, res) => {
  var theme = req.body.theme1
  var pass = req.body.theme2
  res.cookie('theme', theme)
  res.cookie('pass', pass)
  res.send(`The cookie is set <a href='/get-cookie'>get-cookie</a>`)
})

//to get cookie
obj.get('/get-cookie', (req, res) => {
  var theme3 = req.cookies.theme
  var pss2 = req.cookies.pass
  res.send(
    `The fetched cookie is ${theme3},${pss2} <a href='delete-cookie'>delete-cookie</a>`
  )
})

//to delete a cookies
obj.get('/delete-cookie', (req, res) => {
  res.clearCookie('theme')
  res.clearCookie('pass')
  res.send(`The cookie cleared <a href='get-cookie'>get-cookie</a>`)
})
obj.listen(3014, () => {
  console.log('server is running in the port no 3014')
})
