/*
 * express/post.js
 * Purpose: demonstrates handling POST requests with URL-encoded form data.
 * How to run:
 *   1. cd express
 *   2. npm install express body-parser
 *   3. node post.js
 *   4. Open http://localhost:3001/postlogin to access the example form.
 */

var express = require('express')
var obj = new express()
var body = require('body-parser')
var encoded = express.urlencoded({ extended: true })
obj.get('/postlogin', (req, res) => {
  res.sendFile(__dirname + '/formpost.html')
})
obj.post('/formpost', encoded, (req, res) => {
  res.send({
    name: req.body.n1,
    pass: req.body.n2,
  })
})
obj.listen(3001, () => {
  console.log('server running')
})
