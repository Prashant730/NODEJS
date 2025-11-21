/**
 * Filename: http.js
 * Unit: Unit II - HTTP Services
 * Topic: HTTP Module - Creating Basic Web Servers
 *
 * Purpose:
 *   This file demonstrates how to create a basic HTTP server using Node.js's
 *   built-in 'http' module. It shows how to handle requests, send responses,
 *   and perform calculations on the server side.
 *
 * Learning Objectives:
 *   - Create an HTTP server using the http module
 *   - Understand request and response objects
 *   - Send multiple writes to build a response
 *   - Convert data types for HTTP responses
 *   - Implement server-side logic (calculations)
 *
 * Prerequisites:
 *   - Node.js installed (check with: node --version)
 *   - Understanding of functions and callbacks
 *
 * How to Run:
 *   1. Navigate to this directory: cd EH/Unit-II-HTTP-Services/01-http-module
 *   2. Run: node http.js
 *   3. Open browser: http://localhost:3000
 *   4. Expected output: Numbers, addition result, and factorial calculation
 *   5. Stop server: Press Ctrl+C
 *
 * Key Concepts:
 *   - http.createServer(): Creates a new HTTP server
 *   - Request handler: Callback function that processes requests
 *   - res.write(): Sends data to the client (can be called multiple times)
 *   - res.end(): Signals that the response is complete
 *   - listen(): Starts the server on a specific port
 */

// === SECTION: Basic HTTP Server (Commented Example) ===
// This is the simplest possible HTTP server
// It responds with the same text to every request

// var http=require('http')
// http.createServer((req,res)=>{
//     // res.write() sends data to the client
//     res.write("hello server")
//     res.write("hello server1")
//     // res.end() signals that the response is complete
//     res.end()
// }).listen(3000,()=>{
//     console.log("server running")
// })

// === SECTION: HTTP Server with Calculations ===
// This server demonstrates server-side logic and data type handling

var http = require('http')

http
  .createServer((req, res) => {
    // === Response Building ===
    // Each res.write() adds content to the response

    // Template literals make it easy to embed variables
    res.write(`the number is ${10} \n`)

    // Numbers must be converted to strings for HTTP responses
    var a = 10
    res.write(a.toString())

    // === Server-Side Function: Addition ===
    function add(a, b) {
      return a + b
    }
    res.write(`The addition is ${add(4, 5)} `)

    // === Server-Side Function: Factorial (Recursive) ===
    // This demonstrates that you can run any JavaScript logic on the server
    function factorial(n) {
      if (n === 0) {
        return 1
      }
      return n * factorial(n - 1)
    }
    res.write(`The factorial is ${factorial(5)}`)

    // Always call res.end() to complete the response
    res.end()
  })
  .listen(3000, () => {
    console.log('Server running at http://localhost:3000')
    console.log('Press Ctrl+C to stop')
  })

// === SECTION: Key Takeaways ===
// 1. The http module is built into Node.js - no npm install needed
// 2. createServer() takes a callback with (req, res) parameters
// 3. req = incoming request, res = outgoing response
// 4. Use res.write() to send data, res.end() to finish
// 5. The server runs continuously until you stop it (Ctrl+C)
