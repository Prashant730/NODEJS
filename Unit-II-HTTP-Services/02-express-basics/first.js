/*
 * express/first.js
 * Purpose: Simple Express examples showing routes and sending files.
 * Requirements: install dependencies in this folder first:
 *   cd express
 *   npm install express
 * How to run: from `express/` run `node first.js` then open http://localhost:3000
 * Routes available:
 *   GET /dashboard   -> returns plain text response
 *   GET /home        -> serves `first.html` from this folder
 *   GET /login       -> serves `formget.html` (a simple form)
 *   GET /getsend     -> reads numeric query params `num1` and `num2` and returns their sum
 */

var exp = require('express') // third party-first install and then import
var obj = new exp()
obj.get('/dashboard', (req, res) => {
  res.send(`hi express \n hlo \n`)
})
obj.get('/home', (req, res) => {
  res.sendFile(__dirname + '/first.html')
})
obj.get('/login', (req, res) => {
  res.sendFile(__dirname + '/formget.html')
})
obj.get('/getsend', (req, res) => {
  // res.send({
  //     name:req.query.n1,
  //     pass:req.query.n2
  // })
  ;(num1 = parseInt(req.query.num1)), // form field are in string, so parse it accordingly
    (num2 = parseInt(req.query.num2))
  c = num1 + num2
  res.send(`The result is ${c}`)
})
obj.listen(3000, () => {
  console.log('running')
})
