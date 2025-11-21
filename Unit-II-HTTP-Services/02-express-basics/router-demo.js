/*
 * express/routermiddleware.js
 * Purpose: demonstrates router-level middleware in Express using `express.Router()`.
 * How it works:
 *   - A router is created and middleware functions are attached to specific routes
 *   - The router is mounted on `/user`, so endpoints become `/user/dashboard` and `/user/profile`.
 * How to run:
 *   1. cd express
 *   2. npm install express
 *   3. node routermiddleware.js
 *   4. Open http://localhost:3009/user/dashboard and /user/profile
 */

var express = require('express')
var obj = new express()
var router = express.Router()

var rou = (req, res, next) => {
  console.log('router level middleware, run only for dashboard')
  next()
}
router.get('/dashboard', rou, (req, res) => {
  res.send('dashboard page opened')
})
var rou1 = (req, res, next) => {
  console.log('router level middleware, run only for profile')
  next()
}

router.get('/profile', rou1, (req, res) => {
  res.send('profile page opened')
})
obj.use('/user', router)
obj.listen(3009, () => {
  console.log('server running')
})
