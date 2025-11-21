/**
 * Filename: middlewares.js
 * Unit: Unit III - Middleware
 * Topic: Middleware Basics - Global and Route-Specific Middleware
 *
 * Purpose:
 *   This file demonstrates the fundamentals of Express middleware, including
 *   global middleware that runs for all routes and route-specific middleware
 *   that runs only for particular routes.
 *
 * Learning Objectives:
 *   - Understand what middleware is and how it works
 *   - Learn to create custom middleware functions
 *   - Use app.use() for global middleware
 *   - Apply middleware to specific routes
 *   - Understand the next() function
 *   - See middleware execution order
 *
 * Prerequisites:
 *   - Node.js installed (check with: node --version)
 *   - Express installed (npm install express)
 *   - Understanding of Express routing
 *
 * How to Run:
 *   1. Navigate to this directory: cd EH/Unit-III-Middleware/01-middleware-basics
 *   2. Ensure Express is installed: npm install express
 *   3. Run: node middlewares.js
 *   4. Open browser: http://localhost:3009
 *   5. Try: http://localhost:3009/home
 *   6. Watch console output to see middleware execution
 *   7. Stop server: Press Ctrl+C
 *
 * Key Concepts:
 *   - Middleware: Functions that have access to req, res, and next
 *   - next(): Passes control to the next middleware function
 *   - app.use(): Registers global middleware (runs for all routes)
 *   - Route-specific middleware: Applied only to certain routes
 *   - Execution order: Middleware runs in the order it's defined
 */

// === SECTION: Import Express ===
var express = require('express')
var obj = new express()

// === SECTION: Global Middleware (Method 1 - Named Function) ===
// This middleware runs for EVERY request to ANY route
// It's registered using app.use() with a named function

var log = (req, res, next) => {
  console.log('Middleware (1): Logging request')
  console.log(`  Method: ${req.method}, URL: ${req.url}`)

  // next() is CRITICAL - it passes control to the next middleware
  // Without next(), the request will hang and never reach the route handler
  next()
}

// Register the middleware globally
obj.use(log)

// === SECTION: Global Middleware (Method 2 - Anonymous Function) ===
// You can also define middleware inline as an anonymous function
// This also runs for every request

obj.use((req, res, next) => {
  console.log('Middleware (2): Another global middleware')
  console.log(`  Timestamp: ${new Date().toISOString()}`)
  next()
})

// === SECTION: Route Without Specific Middleware ===
// This route only has the global middleware (1 and 2) running before it

obj.get('/', (req, res) => {
  console.log('Route Handler: / (root)')
  res.send(
    'Middlewares are running! Check the console to see the execution order.'
  )
})

// === SECTION: Route-Specific Middleware ===
// This middleware ONLY runs for the /home route
// It's passed as the second argument to app.get()

var log1 = (req, res, next) => {
  console.log('Middleware (3): Route-specific for /home')
  console.log('  This only runs when /home is accessed')
  next()
}

// The execution order for /home is:
// 1. Global middleware (log)
// 2. Global middleware (anonymous)
// 3. Route-specific middleware (log1)
// 4. Route handler
obj.get('/home', log1, (req, res) => {
  console.log('Route Handler: /home')
  res.send('Home page - this route has an extra middleware! Check console.')
})

// === SECTION: Start Server ===
obj.listen(3009, () => {
  console.log('=== Middleware Demo Server ===')
  console.log('Server running at http://localhost:3009')
  console.log('\nTry these URLs and watch the console:')
  console.log('  http://localhost:3009/       - Runs global middleware only')
  console.log(
    '  http://localhost:3009/home   - Runs global + route-specific middleware'
  )
  console.log('\nPress Ctrl+C to stop')
})

// === SECTION: Middleware Execution Flow ===
/*
When you visit http://localhost:3009/:
  1. Middleware (1) - log function
  2. Middleware (2) - anonymous function
  3. Route Handler - sends response

When you visit http://localhost:3009/home:
  1. Middleware (1) - log function
  2. Middleware (2) - anonymous function
  3. Middleware (3) - log1 function (route-specific)
  4. Route Handler - sends response

Key Points:
  - Middleware runs in the order it's defined
  - Global middleware (app.use) runs for ALL routes
  - Route-specific middleware runs only for that route
  - Always call next() unless you're ending the response
  - If you don't call next(), the request will hang
*/
