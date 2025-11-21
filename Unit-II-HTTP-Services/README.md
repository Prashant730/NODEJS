# Unit II: HTTP Services

## Unit Overview

This unit covers creating web servers and HTTP services in Node.js. You'll learn to use the built-in HTTP module for basic servers, then progress to Express.js, a popular web framework that simplifies routing, middleware, and request handling. By the end of this unit, you'll be able to build complete web applications with forms, routing, and data handling.

## Learning Goals

- Create HTTP servers using the core http module
- Understand request/response cycle
- Master Express.js framework basics
- Handle GET and POST requests
- Work with HTML forms and form data
- Implement routing and route parameters
- Use body-parser for form data
- Validate user input with express-validator

## Topics and Files

### 01-http-module/

**Topic:** Core HTTP Module

- `http.js` - Basic HTTP server with calculations
- `server.js` - HTTP server fundamentals

**Learning Focus:** Creating servers, handling requests, sending responses

**How to Run:**

```bash
cd 01-http-module
node http.js
# Visit http://localhost:3000
```

---

### 02-express-basics/

**Topic:** Express.js Framework

#### Main Files:

- `package.json` - Express project dependencies
- `package.README.md` - Detailed package documentation
- `first.js` - Introduction to Express (routes, sendFile)
- `get-post.js` - Handling GET and POST requests
- `body-parser-demo.js` - Parsing form data
- `router-demo.js` - Using express.Router() for modular routing

#### HTML Forms (html-forms/):

- `first.html` - Basic HTML page
- `formget.html` - Form using GET method
- `formpost.html` - Form using POST method
- `test.html` - Additional form examples

**Learning Focus:** Express routing, middleware, form handling, modular code

**How to Run:**

```bash
cd 02-express-basics

# Install dependencies first
npm install

# Run different examples
node first.js          # Visit http://localhost:3000
node get-post.js       # Visit http://localhost:3001/postlogin
node router-demo.js    # Visit http://localhost:3009/user/dashboard
```

---

## Recommended Study Order

1. **HTTP Basics** - Start with `01-http-module/http.js` to understand core concepts
2. **Express Introduction** - Read `02-express-basics/package.README.md`
3. **Install Dependencies** - Run `npm install` in `02-express-basics/`
4. **Basic Express** - Run `first.js` and explore routes
5. **Forms** - Work through `get-post.js` and test the forms
6. **Routing** - Study `router-demo.js` for modular routing patterns

## Common Commands for This Unit

```bash
# Install Express and dependencies
npm install express body-parser express-validator

# Run an Express server
node filename.js

# Test with curl (alternative to browser)
curl http://localhost:3000

# Send POST request with curl
curl -X POST -d "n1=value1&n2=value2" http://localhost:3000/endpoint
```

## Key Concepts Summary

### HTTP Module

- **http.createServer()**: Creates a server
- **req (request)**: Contains info about the incoming request
- **res (response)**: Used to send data back to the client
- **res.write()**: Sends data (can call multiple times)
- **res.end()**: Completes the response
- **listen(port)**: Starts the server on a port

### Express.js Framework

Express simplifies HTTP server creation with:

- Clean routing syntax
- Middleware support
- Built-in utilities
- Template engine support
- Static file serving

### HTTP Methods

- **GET**: Retrieve data (query params in URL)
- **POST**: Submit data (data in request body)
- **PUT**: Update existing data
- **DELETE**: Remove data

### Routing

```javascript
// Basic route
app.get('/path', (req, res) => {
  res.send('Response')
})

// Route with parameter
app.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`)
})

// Route with query params
// URL: /search?q=nodejs
app.get('/search', (req, res) => {
  res.send(`Query: ${req.query.q}`)
})
```

### Request Data Access

- **req.params**: URL parameters (/user/:id)
- **req.query**: Query string (?name=value)
- **req.body**: POST data (requires body-parser)
- **req.headers**: HTTP headers

### Response Methods

- **res.send()**: Send any type of response
- **res.json()**: Send JSON response
- **res.sendFile()**: Send a file
- **res.redirect()**: Redirect to another URL
- **res.status()**: Set HTTP status code

### Body Parser

Middleware to parse incoming request bodies:

```javascript
// URL-encoded data (forms)
app.use(express.urlencoded({ extended: true }))

// JSON data
app.use(express.json())
```

### Express Router

Modular routing for better code organization:

```javascript
const router = express.Router()

router.get('/dashboard', (req, res) => {
  res.send('Dashboard')
})

app.use('/user', router) // Mounts at /user/dashboard
```

## HTML Forms

### GET Form

```html
<form action="/search" method="GET">
  <input type="text" name="query" />
  <button type="submit">Search</button>
</form>
```

- Data appears in URL: `/search?query=value`
- Accessible via `req.query.query`

### POST Form

```html
<form action="/submit" method="POST">
  <input type="text" name="username" />
  <button type="submit">Submit</button>
</form>
```

- Data sent in request body
- Accessible via `req.body.username` (requires body-parser)

## Port Numbers

Different examples use different ports:

- **3000**: Main Express examples
- **3001**: POST form example
- **3009**: Router middleware example

If you get "port already in use" error:

1. Stop the running server (Ctrl+C)
2. Or change the port number in the code

## Debugging Tips

### Server Not Starting

```bash
# Check if port is in use
netstat -ano | findstr :3000  # Windows
lsof -i :3000                 # Mac/Linux

# Kill process using port
taskkill /PID <PID> /F        # Windows
kill -9 <PID>                 # Mac/Linux
```

### Cannot GET /route

- Check route spelling
- Verify HTTP method (GET vs POST)
- Ensure server is running

### Form Data Not Received

- Add body-parser middleware
- Check form method matches route method
- Verify input field names match req.body properties

### Module Not Found

```bash
# Install missing dependencies
npm install

# Or install specific module
npm install express
```

## Express vs HTTP Module

| Feature      | HTTP Module    | Express             |
| ------------ | -------------- | ------------------- |
| Routing      | Manual if/else | Clean route methods |
| Middleware   | Manual         | Built-in support    |
| Form parsing | Manual         | body-parser         |
| Static files | Manual         | express.static()    |
| Templates    | Manual         | Multiple engines    |
| Code size    | More verbose   | Concise             |

## Prerequisites for Next Unit

Before moving to Unit III (Middleware), ensure you:

- ✓ Can create Express servers
- ✓ Understand routing (GET, POST)
- ✓ Can handle form submissions
- ✓ Know how to access request data (params, query, body)
- ✓ Understand the request-response cycle

## Common Errors and Solutions

**Error:** "Cannot find module 'express'"

- **Solution:** Run `npm install express` in the project directory

**Error:** "Address already in use"

- **Solution:** Port is occupied, change port or stop other server

**Error:** "req.body is undefined"

- **Solution:** Add body-parser middleware before routes

**Error:** "Cannot GET /"

- **Solution:** Define a route for '/' or check URL spelling

## Additional Resources

- Express.js Official Docs: https://expressjs.com
- HTTP Status Codes: https://httpstatuses.com
- REST API Design: https://restfulapi.net
- MDN HTTP Guide: https://developer.mozilla.org/en-US/docs/Web/HTTP

## Next Unit

Once you're comfortable with HTTP services and Express basics, proceed to:
**Unit III: Middleware** - Learn about middleware functions, authentication, sessions, and cookies.

---

_Keep Building! 🌐_
