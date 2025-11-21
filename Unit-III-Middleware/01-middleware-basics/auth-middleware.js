/*
 * express/authmilddleware.js
 * Purpose: demonstrates a simple auth-style middleware that checks a fake user
 * object and either calls `next()` or blocks the request.
 * How to run:
 *   1. cd express
 *   2. npm install express
 *   3. node authmilddleware.js
 *   4. Visit http://localhost:3009/ to see the middleware in action.
 * Note: This example uses a hard-coded `fake` user for demonstration only.
 */

var express = require('express')
var obj = new express()

var fake = {
  id: 1,
  name: 'arwin',
  role: 'admin1',
}
var auth = function (req, res, next) {
  if (fake.role == 'admin') {
    console.log('authenticated')
    next()
  } else {
    console.log('wrong user')
  }
}
obj.get('/', auth, (req, res) => {
  res.send('authenticated')
})
obj.listen(3009, () => {
  console.log('server running')
})
