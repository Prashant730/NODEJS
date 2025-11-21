/*
 * express/builtinmiddleware.js
 * Purpose: demonstrates Express built-in middleware: `express.json`, `express.urlencoded` and `express.static`.
 * How to run:
 *   1. cd express
 *   2. npm install express
 *   3. node builtinmiddleware.js
 *   4. Visit http://localhost:3000 and POST to `/formpost` to see parsed body echoed.
 */

var express = require('express')
var obj = new express()
var path = require('path')
obj.use(express.urlencoded({ extended: true }))
var filepath = path.join(__dirname, '/public')
obj.use(express.json())
obj.use(express.static(filepath))
obj.post('/formpost', (req, res) => {
  var body = req.body
  res.send(body)
})
obj.listen(3000, () => {
  console.log('server running')
})
