# Express.js Basics Package

**Unit:** Unit II - HTTP Services
**Topic:** Express.js Framework Fundamentals

## Purpose

This package contains examples demonstrating Express.js fundamentals including routing, form handling, body parsing, and modular routing with express.Router(). These examples build on the basic HTTP module concepts and show how Express simplifies web application development.

## Package Structure

```
02-express-basics/
├── package.json              # Project dependencies
├── package.README.md         # This file
├── first.js                  # Express introduction and basic routing
├── get-post.js               # Handling GET and POST requests
├── body-parser-demo.js       # Parsing form data
├── router-demo.js            # Modular routing with express.Router()
└── html-forms/               # HTML form examples
    ├── first.html            # Basic HTML page
    ├── formget.html          # GET method form
    ├── formpost.html         # POST method form
    └── test.html             # Additional examples
```

## Dependencies

### express (^4.18.0)

**Purpose:** Web application framework for Node.js

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies:

- Routing
- Middleware integration
- HTTP utility methods
- Template rendering

**Why we use it:** Express dramatically reduces boilerplate code compared to the raw http module, making it easier to build web applications.

### body-parser (^1.20.0)

**Purpose:** Parse incoming request bodies

Body-parser extracts the entire body portion of an incoming request stream and exposes it on `req.body`. It supports:

- JSON payloads
- URL-encoded form data
- Raw text
- Raw buffers

**Why we use it:** HTML forms send data in the request body. Body-parser makes this data easily accessible in your route handlers.

**Note:** Express 4.16+ includes body-parser functionality built-in via `express.json()` and `express.urlencoded()`.

## Installation

### First Time Setup

```bash
# Navigate to this directory
cd EH/Unit-II-HTTP-Services/02-express-basics

# Install all dependencies listed in package.json
npm install
```

This will create a `node_modules/` folder with all required packages.

### Installing Individual Packages

```bash
# Install Express
npm install express

# Install body-parser
npm install body-parser

# Install both at once
npm install express body-parser
```

## NPM Scripts

### `npm test`

Currently returns an error message. In a production application, this would run your test suite using a framework like Jest or Mocha.

```bash
npm test
# Output: Error: no test specified
```

To add tests in the future, you would:

1. Install a testing framework: `npm install --save-dev jest`
2. Update the test script in package.json
3. Create test files

## Usage Examples

### Example 1: Basic Express Server (first.js)

```bash
node first.js
```

**What it does:**

- Creates an Express application
- Defines multiple routes (/, /dashboard, /home, /login)
- Serves HTML files
- Handles query parameters

**Try these URLs:**

- http://localhost:3000/dashboard - Plain text response
- http://localhost:3000/home - Serves first.html
- http://localhost:3000/login - Serves formget.html
- http://localhost:3000/getsend?num1=5&num2=3 - Calculates sum

### Example 2: GET and POST Requests (get-post.js)

```bash
node get-post.js
```

**What it does:**

- Demonstrates POST request handling
- Uses body-parser to parse form data
- Serves a POST form and processes submissions

**Try this:**

1. Visit http://localhost:3001/postlogin
2. Fill out the form
3. Submit to see the parsed data

### Example 3: Body Parser Demo (body-parser-demo.js)

```bash
node body-parser-demo.js
```

**What it does:**

- Serves multiple HTML pages
- Demonstrates static file serving
- Shows basic routing patterns

**Try these URLs:**

- http://localhost:3000/ - Main page
- http://localhost:3000/copyfile - Copy file example
- http://localhost:3000/writefile - Write file example

### Example 4: Router Middleware (router-demo.js)

```bash
node router-demo.js
```

**What it does:**

- Demonstrates express.Router() for modular routing
- Shows router-level middleware
- Organizes routes by feature/resource

**Try these URLs:**

- http://localhost:3009/user/dashboard - Dashboard with middleware
- http://localhost:3009/user/profile - Profile with different middleware

## Key Concepts Demonstrated

### 1. Express Application Setup

```javascript
const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
```

### 2. Routing

```javascript
// GET request
app.get('/path', (req, res) => {
  res.send('Response')
})

// POST request
app.post('/path', (req, res) => {
  res.send('Posted')
})
```

### 3. Sending Responses

```javascript
// Send text
res.send('Hello')

// Send JSON
res.json({ name: 'John' })

// Send file
res.sendFile(__dirname + '/file.html')

// Redirect
res.redirect('/other-page')
```

### 4. Request Data Access

```javascript
// Query parameters: /search?q=nodejs
const query = req.query.q

// URL parameters: /user/:id
const userId = req.params.id

// POST body data (requires body-parser)
const username = req.body.username
```

### 5. Body Parser Middleware

```javascript
// Parse URL-encoded bodies (forms)
app.use(express.urlencoded({ extended: true }))

// Parse JSON bodies
app.use(express.json())

// Now req.body is populated
app.post('/submit', (req, res) => {
  console.log(req.body) // Form data here
})
```

### 6. Express Router

```javascript
const router = express.Router()

// Define routes on router
router.get('/dashboard', (req, res) => {
  res.send('Dashboard')
})

// Mount router on path
app.use('/user', router)
// Now accessible at /user/dashboard
```

## Common Patterns

### Pattern 1: Form Handling

```javascript
// Serve the form
app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/form.html')
})

// Process form submission
app.post('/submit', express.urlencoded({ extended: true }), (req, res) => {
  const data = req.body
  res.send(`Received: ${JSON.stringify(data)}`)
})
```

### Pattern 2: API Endpoints

```javascript
// GET all items
app.get('/api/items', (req, res) => {
  res.json({ items: [] })
})

// GET single item
app.get('/api/items/:id', (req, res) => {
  const id = req.params.id
  res.json({ id, name: 'Item' })
})

// CREATE item
app.post('/api/items', (req, res) => {
  const newItem = req.body
  res.status(201).json(newItem)
})
```

### Pattern 3: Modular Routing

```javascript
// users.js
const router = express.Router()
router.get('/', (req, res) => res.send('Users list'))
router.get('/:id', (req, res) => res.send(`User ${req.params.id}`))
module.exports = router

// app.js
const usersRouter = require('./users')
app.use('/users', usersRouter)
```

## Troubleshooting

### Issue: "Cannot find module 'express'"

**Solution:** Run `npm install` in this directory

### Issue: "req.body is undefined"

**Solution:** Add body-parser middleware before your routes:

```javascript
app.use(express.urlencoded({ extended: true }))
```

### Issue: "Cannot GET /route"

**Solution:**

- Check route spelling
- Verify HTTP method (GET vs POST)
- Ensure server is running

### Issue: "Address already in use"

**Solution:**

- Stop other servers (Ctrl+C)
- Change port number in code
- Kill process using the port

### Issue: "Cannot read property of undefined"

**Solution:**

- Check that form field names match `req.body` properties
- Verify body-parser is configured
- Ensure form method matches route method

## Best Practices

1. **Use environment variables for ports**

   ```javascript
   const PORT = process.env.PORT || 3000
   app.listen(PORT)
   ```

2. **Organize routes logically**

   - Use express.Router() for feature-based routing
   - Keep related routes together
   - Use separate files for different resources

3. **Handle errors**

   ```javascript
   app.use((err, req, res, next) => {
     console.error(err.stack)
     res.status(500).send('Something broke!')
   })
   ```

4. **Validate input**

   - Never trust user input
   - Validate and sanitize data
   - Use libraries like express-validator

5. **Use middleware effectively**
   - Apply middleware in correct order
   - Use route-specific middleware when needed
   - Keep middleware functions focused

## Next Steps

After mastering these examples:

1. **Add validation** - Use express-validator for input validation
2. **Connect a database** - MongoDB, PostgreSQL, etc.
3. **Add authentication** - Implement login/logout
4. **Create a REST API** - Build a complete CRUD API
5. **Add templates** - Use EJS or Pug for dynamic HTML
6. **Deploy** - Host your application online

## Additional Resources

- Express.js Documentation: https://expressjs.com
- Express.js Guide: https://expressjs.com/en/guide/routing.html
- Body-Parser GitHub: https://github.com/expressjs/body-parser
- Express Best Practices: https://expressjs.com/en/advanced/best-practice-performance.html

## Related Files

- **Unit I**: Review `Unit-I-Getting-Started/01-basics/` for JavaScript fundamentals
- **Unit II HTTP Module**: See `Unit-II-HTTP-Services/01-http-module/` for comparison
- **Unit III Middleware**: Continue to `Unit-III-Middleware/` for advanced topics

---

_Build Amazing Web Apps! 🌐_
