# Unit III: Middleware

## Unit Overview

This unit focuses on Express middleware - functions that have access to the request and response objects and can modify them or end the request-response cycle. You'll learn about different types of middleware, how to create custom middleware, and how to implement authentication, sessions, and cookies in your applications.

## Learning Goals

- Understand what middleware is and how it works
- Create custom middleware functions
- Use built-in Express middleware
- Implement authentication middleware
- Work with cookies using cookie-parser
- Manage sessions with express-session
- Understand middleware execution order
- Use app.use() and app.all() effectively

## Topics and Files

### 01-middleware-basics/

**Topic:** Understanding and Creating Middleware

- `middlewares.js` - Basic middleware concepts (app.use, route-specific)
- `builtin-middleware.js` - Express built-in middleware
- `auth-middleware.js` - Authentication middleware example

**Learning Focus:** Middleware flow, next(), custom middleware, authentication

**How to Run:**

```bash
cd 01-middleware-basics

# Make sure express is installed
npm install express

node middlewares.js        # Visit http://localhost:3009
node builtin-middleware.js
node auth-middleware.js
```

---

### 02-session-cookies/

**Topic:** Sessions and Cookies

- `package.json` - Dependencies for session/cookie examples
- `package.README.md` - Detailed documentation
- `cookie-parser.js` - Working with cookies
- `cookie-session.js` - Session management with cookies
- `cookie-practice.js` - Practice exercises with cookies

**Learning Focus:** Cookie management, session state, user tracking

**How to Run:**

```bash
cd 02-session-cookies

# Install dependencies
npm install

node cookie-parser.js    # Visit http://localhost:3000
node cookie-session.js
node cookie-practice.js
```

---

## Recommended Study Order

1. **Middleware Basics** - Start with `middlewares.js` to understand the concept
2. **Built-in Middleware** - Explore `builtin-middleware.js`
3. **Authentication** - Study `auth-middleware.js` for security patterns
4. **Install Dependencies** - Run `npm install` in `02-session-cookies/`
5. **Cookies** - Work through `cookie-parser.js`
6. **Sessions** - Complete `cookie-session.js` and practice examples

## What is Middleware?

Middleware functions are functions that have access to:

- **req** (request object)
- **res** (response object)
- **next** (next middleware function)

### Middleware Flow

```
Request → Middleware 1 → Middleware 2 → Route Handler → Response
            ↓                ↓              ↓
          next()          next()        res.send()
```

### Basic Middleware Structure

```javascript
function myMiddleware(req, res, next) {
  // Do something with req or res
  console.log('Middleware executed')

  // Call next() to pass control to next middleware
  next()

  // Or end the request-response cycle
  // res.send('Done')
}
```

## Types of Middleware

### 1. Application-Level Middleware

Bound to the app object using `app.use()` or `app.METHOD()`

```javascript
// Runs for all routes
app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

// Runs for specific path
app.use('/user', (req, res, next) => {
  console.log('User route accessed')
  next()
})
```

### 2. Router-Level Middleware

Works like application-level but bound to `express.Router()`

```javascript
const router = express.Router()

router.use((req, res, next) => {
  console.log('Router middleware')
  next()
})

router.get('/dashboard', (req, res) => {
  res.send('Dashboard')
})

app.use('/user', router)
```

### 3. Built-in Middleware

Express provides several built-in middleware functions:

```javascript
// Parse JSON bodies
app.use(express.json())

// Parse URL-encoded bodies (forms)
app.use(express.urlencoded({ extended: true }))

// Serve static files
app.use(express.static('public'))
```

### 4. Third-Party Middleware

Installed via npm:

```javascript
// Cookie parser
const cookieParser = require('cookie-parser')
app.use(cookieParser())

// Session management
const session = require('express-session')
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
)
```

### 5. Error-Handling Middleware

Has four parameters (err, req, res, next):

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```

## Middleware Execution Order

Middleware executes in the order it's defined:

```javascript
// 1. First middleware
app.use((req, res, next) => {
  console.log('First')
  next()
})

// 2. Second middleware
app.use((req, res, next) => {
  console.log('Second')
  next()
})

// 3. Route handler
app.get('/', (req, res) => {
  console.log('Route')
  res.send('Done')
})

// Output: First → Second → Route
```

## Authentication Middleware

Common pattern for protecting routes:

```javascript
// Authentication middleware
function isAuthenticated(req, res, next) {
  if (req.session && req.session.userId) {
    next() // User is authenticated, continue
  } else {
    res.status(401).send('Unauthorized') // Block access
  }
}

// Protected route
app.get('/dashboard', isAuthenticated, (req, res) => {
  res.send('Welcome to dashboard')
})

// Public route (no middleware)
app.get('/login', (req, res) => {
  res.send('Login page')
})
```

## Cookies

Cookies are small pieces of data stored in the browser.

### Setting Cookies

```javascript
// Basic cookie
res.cookie('username', 'john')

// Cookie with options
res.cookie('token', 'abc123', {
  maxAge: 900000, // 15 minutes
  httpOnly: true, // Not accessible via JavaScript
  secure: true, // Only sent over HTTPS
})
```

### Reading Cookies

```javascript
// Requires cookie-parser middleware
app.use(cookieParser())

app.get('/profile', (req, res) => {
  const username = req.cookies.username
  res.send(`Hello ${username}`)
})
```

### Deleting Cookies

```javascript
res.clearCookie('username')
```

## Sessions

Sessions store user data on the server, with a session ID stored in a cookie.

### Session Setup

```javascript
const session = require('express-session')

app.use(
  session({
    secret: 'your-secret-key', // Used to sign session ID
    resave: false, // Don't save unchanged sessions
    saveUninitialized: false, // Don't create session until data stored
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
    },
  })
)
```

### Using Sessions

```javascript
// Store data in session
app.post('/login', (req, res) => {
  req.session.userId = 123
  req.session.username = 'john'
  res.send('Logged in')
})

// Access session data
app.get('/profile', (req, res) => {
  if (req.session.userId) {
    res.send(`Welcome ${req.session.username}`)
  } else {
    res.send('Please login')
  }
})

// Destroy session
app.post('/logout', (req, res) => {
  req.session.destroy()
  res.send('Logged out')
})
```

## app.use() vs app.all()

### app.use()

- Matches any HTTP method
- Matches path prefix (partial match)
- Typically for middleware

```javascript
// Matches /user, /user/profile, /user/settings, etc.
app.use('/user', middleware)
```

### app.all()

- Matches any HTTP method
- Requires exact path match
- Typically for route handlers

```javascript
// Only matches exactly /user
app.all('/user', handler)
```

## Common Middleware Patterns

### Logging Middleware

```javascript
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`)
  next()
})
```

### Request Timing

```javascript
app.use((req, res, next) => {
  req.startTime = Date.now()
  next()
})

app.use((req, res, next) => {
  const duration = Date.now() - req.startTime
  console.log(`Request took ${duration}ms`)
  next()
})
```

### CORS Middleware

```javascript
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
```

## Common Commands for This Unit

```bash
# Install middleware packages
npm install express cookie-parser express-session

# Run middleware examples
node middlewares.js

# Test with curl
curl http://localhost:3000

# Test with cookies
curl -b "name=value" http://localhost:3000
curl -c cookies.txt http://localhost:3000  # Save cookies
curl -b cookies.txt http://localhost:3000  # Send cookies
```

## Debugging Middleware

### Check Execution Order

```javascript
app.use((req, res, next) => {
  console.log('1: First middleware')
  next()
})

app.use((req, res, next) => {
  console.log('2: Second middleware')
  next()
})

app.get('/', (req, res) => {
  console.log('3: Route handler')
  res.send('Done')
})
```

### Common Issues

**Middleware not executing:**

- Check if `next()` is called
- Verify middleware is defined before routes
- Ensure path matches

**Response already sent:**

- Don't call `res.send()` multiple times
- Don't call both `res.send()` and `next()`

**Session not persisting:**

- Check cookie settings
- Verify secret is set
- Ensure session middleware is before routes

## Security Best Practices

1. **Use HTTPS** - Especially for cookies with sensitive data
2. **Set httpOnly** - Prevents JavaScript access to cookies
3. **Use secure flag** - Cookies only sent over HTTPS
4. **Strong secrets** - Use long, random strings for session secrets
5. **Validate input** - Always validate user input in middleware
6. **Rate limiting** - Prevent abuse with rate-limiting middleware
7. **CSRF protection** - Use CSRF tokens for forms

## Prerequisites for Advanced Topics

After completing this unit, you should:

- ✓ Understand middleware execution flow
- ✓ Can create custom middleware
- ✓ Know how to use cookies and sessions
- ✓ Can implement basic authentication
- ✓ Understand security considerations

## Common Errors and Solutions

**Error:** "Cannot set headers after they are sent"

- **Solution:** Don't call `res.send()` after `next()`, choose one

**Error:** "req.cookies is undefined"

- **Solution:** Add `app.use(cookieParser())` before routes

**Error:** "req.session is undefined"

- **Solution:** Add session middleware before routes

**Error:** "Middleware not executing"

- **Solution:** Ensure `next()` is called and middleware is before routes

## Additional Resources

- Express Middleware Guide: https://expressjs.com/en/guide/using-middleware.html
- Cookie-Parser Docs: https://github.com/expressjs/cookie-parser
- Express-Session Docs: https://github.com/expressjs/session
- Security Best Practices: https://expressjs.com/en/advanced/best-practice-security.html

## Next Steps

After mastering middleware, you can explore:

- Database integration (MongoDB, PostgreSQL)
- Authentication libraries (Passport.js)
- API development (REST, GraphQL)
- Template engines (EJS, Pug)
- Real-time communication (Socket.io)

---

_Secure Your Apps! 🔒_
