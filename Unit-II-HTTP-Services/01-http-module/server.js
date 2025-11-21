/*
 * server.js
 * Purpose: placeholder file showing where core module examples live.
 * Notes: This file currently contains a short marker. Many examples are
 * located in the `coremodule/` folder (e.g., `fs.js`, `http.js`, etc.).
 * How to run: from the repository root run `node server.js` (no output expected)
 */
// core modules //

/**
 * server.js
 * Simple HTTP server example using Node's built-in `http` module.
 * Replace the placeholder with an actual runnable example so opening
 * this file in the editor and running `node server.js` starts a server.
 */

const http = require('http')

const PORT = process.env.PORT || 3000

function factorial(n) {
  if (n === 0) return 1
  return n * factorial(n - 1)
}

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')

  res.write(`Requested URL: ${req.url}\n`)
  res.write(`Method: ${req.method}\n\n`)

  // Demonstration values and calculations
  const a = 10
  res.write(`The number is ${a}\n`)
  res.write(`Addition: ${a} + 5 = ${a + 5}\n`)
  res.write(`Factorial of 5: ${factorial(5)}\n`)

  res.end('Response complete\n')
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:3000/`)
  console.log('Press Ctrl+C to stop')
})
