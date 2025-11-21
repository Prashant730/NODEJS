/**
 * Filename: os-module-demo.js
 * Unit: Unit I - Getting Started with Node.js
 * Topic: Core Modules - OS Module
 *
 * Purpose:
 *   This file demonstrates the Node.js 'os' (Operating System) module, which
 *   provides information about the computer's operating system. It creates a
 *   simple HTTP server that displays OS information in the browser.
 *
 * Learning Objectives:
 *   - Learn how to use the built-in 'os' module
 *   - Understand how to get system information programmatically
 *   - Practice combining multiple Node.js core modules (http + os)
 *   - Learn proper type conversion for HTTP responses
 *
 * Prerequisites:
 *   - Node.js installed (check with: node --version)
 *   - Understanding of basic HTTP servers
 *
 * How to Run:
 *   1. Navigate to this directory: cd EH/Unit-I-Getting-Started/02-npm-modules
 *   2. Run: node os-module-demo.js
 *   3. Open browser: http://localhost:3000
 *   4. Expected output: System architecture, free memory, and total memory
 *   5. Stop server: Press Ctrl+C in terminal
 *
 * Key Concepts:
 *   - os module: Built-in Node.js module for OS information
 *   - System information: CPU architecture, memory stats, platform details
 *   - Type conversion: Converting numbers to strings for HTTP responses
 *   - Core modules: No npm install needed - these come with Node.js
 */

// === SECTION: Module Imports ===
// Both 'http' and 'os' are core Node.js modules - no installation required

const http = require('http') // For creating web servers
const os = require('os') // For accessing OS information

// === SECTION: HTTP Server with OS Information ===
// This server responds with system information when accessed

http
  .createServer((req, res) => {
    // Set proper content type for HTML response
    res.writeHead(200, { 'Content-Type': 'text/html' })

    // === OS Module Methods ===

    // os.arch() - Returns the CPU architecture (e.g., 'x64', 'arm', 'arm64')
    res.write('<h2>System Information</h2>')
    res.write(`<p><strong>Architecture:</strong> ${os.arch()}</p>`)

    // os.freemem() - Returns free system memory in bytes
    // Convert bytes to MB for readability (divide by 1024 * 1024)
    const freeMB = (os.freemem() / (1024 * 1024)).toFixed(2)
    res.write(`<p><strong>Free Memory:</strong> ${freeMB} MB</p>`)

    // os.totalmem() - Returns total system memory in bytes
    const totalMB = (os.totalmem() / (1024 * 1024)).toFixed(2)
    res.write(`<p><strong>Total Memory:</strong> ${totalMB} MB</p>`)

    // === Additional OS Information (Bonus Examples) ===

    // os.platform() - Returns the operating system platform
    res.write(`<p><strong>Platform:</strong> ${os.platform()}</p>`)

    // os.cpus() - Returns array of CPU information
    res.write(`<p><strong>CPU Cores:</strong> ${os.cpus().length}</p>`)

    // os.hostname() - Returns the hostname of the operating system
    res.write(`<p><strong>Hostname:</strong> ${os.hostname()}</p>`)

    // os.uptime() - Returns system uptime in seconds
    const uptimeHours = (os.uptime() / 3600).toFixed(2)
    res.write(`<p><strong>System Uptime:</strong> ${uptimeHours} hours</p>`)

    // os.homedir() - Returns the home directory of the current user
    res.write(`<p><strong>Home Directory:</strong> ${os.homedir()}</p>`)

    res.end()
  })
  .listen(3000, () => {
    console.log('Server running at http://localhost:3000')
    console.log('Press Ctrl+C to stop the server')
  })

// === SECTION: Console Output (Alternative Usage) ===
// You can also use the os module without a server:

console.log('\n=== OS Information in Console ===')
console.log('Architecture:', os.arch())
console.log('Platform:', os.platform())
console.log('CPU Cores:', os.cpus().length)
console.log('Free Memory:', (os.freemem() / (1024 * 1024)).toFixed(2), 'MB')
console.log('Total Memory:', (os.totalmem() / (1024 * 1024)).toFixed(2), 'MB')
