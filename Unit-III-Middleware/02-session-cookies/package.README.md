# Sessions and Cookies Package

**Unit:** Unit III - Middleware
**Topic:** Session Management and Cookie Handling

## Purpose

This package demonstrates how to work with cookies and sessions in Express.js applications. You'll learn to store user data, maintain state across requests, and implement basic authentication patterns using cookies and sessions.

## Package Structure

```
02-session-cookies/
├── package.json              # Project dependencies
├── package.README.md         # This file
├── cookie-parser.js          # Cookie basics and manipulation
├── cookie-session.js         # Session management with cookies
└── cookie-practice.js        # Practice exercises
```

## Dependencies

### express (^4.18.0)

**Purpose:** Web application framework

The foundation for all our examples. Express provides the routing and middleware infrastructure needed for cookie and session management.

### cookie-parser (^1.4.6)

**Purpose:** Parse Cookie header and populate req.cookies

Cookie-parser is middleware that parses cookies attached to the client request object. It makes cookies easily accessible via `req.cookies`.

**What it does:**

- Parses the Cookie header
- Populates `req.cookies` with an object keyed by cookie names
- Supports signed cookies for security
- Handles cookie parsing automatically

**Example:**

```javascript
const cookieParser = require('cookie-parser')
app.use(cookieParser())

// Now you can access cookies
app.get('/', (req, res) => {
  console.log(req.cookies.username) // Access cookie value
})
```

### express-session (^1.17.3)

**Purpose:** Session middleware for Express

Express-session creates and manages sessions. It stores session data on the server and sends a session ID to the client via a cookie.

**What it does:**

- Creates unique session IDs
- Stores session data server-side
- Sends session ID cookie to client
- Retrieves session data on subsequent requests
- Handles session expiration

**Example:**

```javascript
const session = require('express-session')

app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
  })
)

// Store data in session
app.post('/login', (req, res) => {
  req.session.userId = 123
})

// Access session data
app.get('/profile', (req, res) => {
  if (req.session.userId) {
    res.send('Welcome back!')
  }
})
```

## Installation

```bash
# Navigate to this directory
cd EH/Unit-III-Middleware/02-session-cookies

# Install all dependencies
npm install

# Or install individually
npm install express cookie-parser express-session
```

## NPM Scripts

### `npm test`

Currently returns an error. To add tests:

```bash
# Install testing framework
npm install --save-dev jest supertest

# Update package.json scripts
"scripts": {
  "test": "jest"
}
```

## Usage Examples

### Example 1: Cookie Parser (cookie-parser.js)

```bash
node cookie-parser.js
```

**What it demonstrates:**

- Setting cookies with `res.cookie()`
- Reading cookies with `req.cookies`
- Cookie options (maxAge, httpOnly, secure)
- Deleting cookies with `res.clearCookie()`

**Try this:**

1. Visit http://localhost:3000/set-cookie
2. Visit http://localhost:3000/get-cookie
3. Check browser DevTools → Application → Cookies

### Example 2: Cookie Session (cookie-session.js)

```bash
node cookie-session.js
```

**What it demonstrates:**

- Session configuration
- Storing data in sessions
- Accessing session data across requests
- Session-based authentication
- Destroying sessions (logout)

**Try this:**

1. Visit http://localhost:3000/login
2. Visit http://localhost:3000/profile (should show logged in)
3. Visit http://localhost:3000/logout
4. Visit http://localhost:3000/profile (should show not logged in)

### Example 3: Cookie Practice (cookie-practice.js)

```bash
node cookie-practice.js
```

**What it demonstrates:**

- Practical cookie applications
- Visit counter
- User preferences
- Shopping cart simulation

## Key Concepts

### Cookies

Cookies are small pieces of data stored in the user's browser.

#### Setting Cookies

```javascript
// Basic cookie
res.cookie('name', 'value')

// Cookie with options
res.cookie('user', 'john', {
  maxAge: 900000, // 15 minutes in milliseconds
  httpOnly: true, // Not accessible via JavaScript
  secure: true, // Only sent over HTTPS
  signed: true, // Cryptographically signed
})
```

#### Reading Cookies

```javascript
// Requires cookie-parser middleware
app.use(cookieParser())

app.get('/profile', (req, res) => {
  const username = req.cookies.username
  res.send(`Hello ${username}`)
})
```

#### Deleting Cookies

```javascript
res.clearCookie('username')
```

#### Cookie Options

| Option     | Type    | Description                               |
| ---------- | ------- | ----------------------------------------- |
| `maxAge`   | Number  | Expiration time in milliseconds           |
| `expires`  | Date    | Expiration date                           |
| `httpOnly` | Boolean | Not accessible via JavaScript (security)  |
| `secure`   | Boolean | Only sent over HTTPS                      |
| `signed`   | Boolean | Cryptographically signed                  |
| `path`     | String  | Cookie path (default: '/')                |
| `domain`   | String  | Cookie domain                             |
| `sameSite` | String  | CSRF protection ('strict', 'lax', 'none') |

### Sessions

Sessions store user data on the server, with only a session ID stored in a cookie.

#### Session Configuration

```javascript
const session = require('express-session')

app.use(
  session({
    secret: 'your-secret-key', // Used to sign session ID
    resave: false, // Don't save unchanged sessions
    saveUninitialized: false, // Don't create session until data stored
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
      httpOnly: true, // Security
      secure: false, // Set true in production with HTTPS
    },
  })
)
```

#### Storing Session Data

```javascript
app.post('/login', (req, res) => {
  // Store any data in session
  req.session.userId = 123
  req.session.username = 'john'
  req.session.isAdmin = false

  res.send('Logged in')
})
```

#### Accessing Session Data

```javascript
app.get('/profile', (req, res) => {
  if (req.session.userId) {
    res.send(`Welcome ${req.session.username}`)
  } else {
    res.redirect('/login')
  }
})
```

#### Destroying Sessions

```javascript
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send('Error logging out')
    } else {
      res.redirect('/login')
    }
  })
})
```

## Cookies vs Sessions

| Feature              | Cookies                   | Sessions                       |
| -------------------- | ------------------------- | ------------------------------ |
| **Storage Location** | Client (browser)          | Server                         |
| **Data Size**        | Limited (~4KB)            | Unlimited (server memory)      |
| **Security**         | Less secure (client-side) | More secure (server-side)      |
| **Performance**      | Faster (no server lookup) | Slower (server lookup)         |
| **Expiration**       | Can persist long-term     | Usually short-term             |
| **Use Cases**        | Preferences, tracking     | Authentication, shopping carts |

## Common Patterns

### Pattern 1: Authentication

```javascript
// Login
app.post('/login', (req, res) => {
  const { username, password } = req.body

  // Verify credentials (simplified)
  if (username === 'admin' && password === 'secret') {
    req.session.userId = 1
    req.session.username = username
    res.redirect('/dashboard')
  } else {
    res.status(401).send('Invalid credentials')
  }
})

// Protected route
app.get('/dashboard', (req, res) => {
  if (!req.session.userId) {
    return res.redirect('/login')
  }
  res.send(`Welcome ${req.session.username}`)
})

// Logout
app.post('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/login')
})
```

### Pattern 2: Shopping Cart

```javascript
// Add to cart
app.post('/cart/add', (req, res) => {
  if (!req.session.cart) {
    req.session.cart = []
  }

  req.session.cart.push({
    id: req.body.productId,
    quantity: req.body.quantity,
  })

  res.json({ success: true, cartSize: req.session.cart.length })
})

// View cart
app.get('/cart', (req, res) => {
  const cart = req.session.cart || []
  res.json({ items: cart })
})
```

### Pattern 3: User Preferences

```javascript
// Save preferences
app.post('/preferences', (req, res) => {
  res.cookie('theme', req.body.theme, { maxAge: 365 * 24 * 60 * 60 * 1000 })
  res.cookie('language', req.body.language, {
    maxAge: 365 * 24 * 60 * 60 * 1000,
  })
  res.send('Preferences saved')
})

// Apply preferences
app.get('/', (req, res) => {
  const theme = req.cookies.theme || 'light'
  const language = req.cookies.language || 'en'
  res.send(`Theme: ${theme}, Language: ${language}`)
})
```

### Pattern 4: Visit Counter

```javascript
app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++
  } else {
    req.session.views = 1
  }

  res.send(`You have visited this page ${req.session.views} times`)
})
```

## Security Best Practices

### 1. Use HTTPS in Production

```javascript
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: {
      secure: true, // Only send over HTTPS
      httpOnly: true,
      sameSite: 'strict',
    },
  })
)
```

### 2. Strong Session Secrets

```javascript
// Bad
secret: '123'

// Good
secret: process.env.SESSION_SECRET // Long random string from environment variable
```

### 3. Set httpOnly Flag

```javascript
res.cookie('token', value, {
  httpOnly: true, // Prevents JavaScript access (XSS protection)
})
```

### 4. Use Signed Cookies for Sensitive Data

```javascript
app.use(cookieParser('your-secret'))

res.cookie('user', 'john', { signed: true })

// Access signed cookie
const user = req.signedCookies.user
```

### 5. Set Appropriate Expiration

```javascript
// Short-lived for sensitive data
res.cookie('authToken', token, {
  maxAge: 15 * 60 * 1000, // 15 minutes
})

// Long-lived for preferences
res.cookie('theme', 'dark', {
  maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year
})
```

### 6. CSRF Protection

```javascript
app.use(
  session({
    cookie: {
      sameSite: 'strict', // Prevents CSRF attacks
    },
  })
)
```

## Troubleshooting

### Issue: req.cookies is undefined

**Solution:** Add cookie-parser middleware before routes

```javascript
app.use(cookieParser())
```

### Issue: req.session is undefined

**Solution:** Add express-session middleware before routes

```javascript
app.use(session({ secret: 'key', resave: false, saveUninitialized: false }))
```

### Issue: Session data not persisting

**Causes:**

- Cookie not being sent by browser
- Session secret changed
- Session store cleared
- Cookie expired

**Solutions:**

- Check browser DevTools → Application → Cookies
- Verify session configuration
- Check cookie maxAge setting

### Issue: Cookies not visible in browser

**Causes:**

- httpOnly flag set (correct behavior for security)
- Cookie expired
- Wrong domain/path

**Solutions:**

- Use DevTools to view httpOnly cookies
- Check cookie options
- Verify domain matches

### Issue: "Cannot set headers after they are sent"

**Cause:** Trying to set cookies after response sent

**Solution:**

```javascript
// Bad
res.send('Done')
res.cookie('name', 'value') // Too late!

// Good
res.cookie('name', 'value')
res.send('Done')
```

## Testing Cookies and Sessions

### Using Browser DevTools

1. Open DevTools (F12)
2. Go to Application tab
3. Click Cookies in left sidebar
4. View/edit/delete cookies

### Using curl

```bash
# Save cookies to file
curl -c cookies.txt http://localhost:3000/login

# Send cookies from file
curl -b cookies.txt http://localhost:3000/profile

# Set cookie manually
curl -b "username=john" http://localhost:3000
```

### Using Postman

1. Send request
2. View Cookies tab in response
3. Cookies automatically sent in subsequent requests

## Production Considerations

### Session Store

In production, don't use default memory store:

```javascript
const session = require('express-session')
const RedisStore = require('connect-redis')(session)

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: process.env.SESSION_SECRET,
  })
)
```

### Environment Variables

```javascript
// .env file
SESSION_SECRET = your - long - random - string
COOKIE_SECRET = another - long - random - string

// app.js
require('dotenv').config()

app.use(
  session({
    secret: process.env.SESSION_SECRET,
  })
)
```

### HTTPS Only

```javascript
if (process.env.NODE_ENV === 'production') {
  app.use(
    session({
      cookie: {
        secure: true, // Require HTTPS
      },
    })
  )
}
```

## Next Steps

After mastering cookies and sessions:

1. **Add database storage** - Store sessions in Redis or MongoDB
2. **Implement OAuth** - Use Passport.js for social login
3. **Add JWT** - Token-based authentication
4. **CSRF protection** - Use csurf middleware
5. **Rate limiting** - Prevent abuse with express-rate-limit

## Additional Resources

- Cookie-Parser Docs: https://github.com/expressjs/cookie-parser
- Express-Session Docs: https://github.com/expressjs/session
- HTTP Cookies (MDN): https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
- Session Security: https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html

---

_Secure Your Sessions! 🔐_
