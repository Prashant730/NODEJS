/*
 * express/text.js
 * Purpose: serves a few static HTML pages and demonstrates basic routing.
 * How to run:
 *   1. cd express
 *   2. npm install express body-parser
 *   3. node text.js
 *   4. Open http://localhost:3000 in your browser and try the links.
 */

var exp = require('express')
var obj = new exp()
var body = require('body-parser')
var encoded = exp.urlencoded({ extended: true })
var fs = require('fs')
obj.get('/', (req, res) => {
  res.sendFile(__dirname + '/test.html')
})
obj.get('/copyfile', (req, res) => {
  res.sendFile(__dirname + '/copyfile.html')
})
obj.get('/writefile', (req, res) => {
  res.sendFile(__dirname + '/writefile.html')
})
obj.listen(3000, () => {
  console.log('server running')
})
