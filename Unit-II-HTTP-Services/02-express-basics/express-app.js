// express-app.js
// Express basics example: routes, static files, POST body parsing, cookies

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(
  cookieSession({
    name: 'session',
    keys: ['secret1', 'secret2'],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
)

// Serve the html-forms folder statically at /forms
app.use('/forms', express.static(path.join(__dirname, 'html-forms')))

// Simple GET route
app.get('/', (req, res) => {
  res.type('text/plain')
  res.send(
    'Hello from express-app.js\nTry GET /dashboard, /json, /forms/first.html'
  )
})

// Dashboard route
app.get('/dashboard', (req, res) => {
  res.send('Welcome to the dashboard!')
})

// JSON response
app.get('/json', (req, res) => {
  res.json({ success: true, message: 'This is a JSON response' })
})

// Show how to read query parameters
app.get('/sum', (req, res) => {
  const n1 = parseFloat(req.query.n1) || 0
  const n2 = parseFloat(req.query.n2) || 0
  res.send(`Sum: ${n1 + n2}`)
})

// POST handler for forms / JSON
app.post('/submit', (req, res) => {
  // If sent from html form (urlencoded) or JSON body
  res.json({ received: req.body })
})

// Cookie example
app.get('/setcookie', (req, res) => {
  res.cookie('mycookie', 'hello', { maxAge: 900000 })
  res.send('Cookie set: mycookie=hello')
})

app.get('/getcookie', (req, res) => {
  res.json({ cookies: req.cookies })
})

// Session example
app.get('/setsession', (req, res) => {
  req.session.views = (req.session.views || 0) + 1
  res.send(`Session views: ${req.session.views}`)
})

// Basic router usage (mounted router)
const router = express.Router()
router.get('/info', (req, res) => res.send('Router says hi'))
app.use('/api', router)

// 404 handler
app.use((req, res) => {
  res.status(404).send('Not Found')
})

app.listen(PORT, () => {
  console.log(`Express app listening at http://localhost:${PORT}`)
})
