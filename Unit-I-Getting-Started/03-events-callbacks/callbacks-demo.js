/**
 * Filename: callbacks-demo.js
 * Unit: Unit I - Getting Started with Node.js
 * Topic: Events and Callbacks - Understanding Callbacks
 *
 * Purpose:
 *   This file demonstrates callback functions in JavaScript and Node.js.
 *   Callbacks are functions passed as arguments to other functions and are
 *   fundamental to Node.js's asynchronous programming model.
 *
 * Learning Objectives:
 *   - Understand what callbacks are and why they're important
 *   - Learn synchronous vs asynchronous callbacks
 *   - See practical examples of callback patterns
 *   - Understand callback parameters (error-first callbacks)
 *
 * Prerequisites:
 *   - Node.js installed (check with: node --version)
 *   - Understanding of JavaScript functions
 *
 * How to Run:
 *   1. Navigate to this directory: cd EH/Unit-I-Getting-Started/03-events-callbacks
 *   2. Run: node callbacks-demo.js
 *   3. Expected output: Various console logs demonstrating callback execution
 *
 * Key Concepts:
 *   - Callback: A function passed as an argument to another function
 *   - Asynchronous: Operations that don't block code execution
 *   - Error-first callbacks: Node.js convention for callback parameters
 *   - Higher-order functions: Functions that take other functions as arguments
 */

// === SECTION: Basic Callback Example ===
// A callback is simply a function passed to another function

console.log('=== Basic Callback Example ===\n')

function greet(name, callback) {
  console.log('Hello, ' + name)
  callback() // Execute the callback function
}

// Pass an anonymous function as a callback
greet('Alice', function () {
  console.log('Callback executed!')
})

// === SECTION: Callbacks with Parameters ===
// Callbacks can receive data from the calling function

console.log('\n=== Callbacks with Parameters ===\n')

function calculate(a, b, operation, callback) {
  const result = operation(a, b)
  callback(result) // Pass result to callback
}

// Pass different operations as callbacks
calculate(
  5,
  3,
  (x, y) => x + y,
  (result) => {
    console.log('Addition result:', result)
  }
)

calculate(
  10,
  2,
  (x, y) => x * y,
  (result) => {
    console.log('Multiplication result:', result)
  }
)

// === SECTION: Synchronous vs Asynchronous Callbacks ===

console.log('\n=== Synchronous Callbacks ===\n')

// Array methods use synchronous callbacks
const numbers = [1, 2, 3, 4, 5]

numbers.forEach((num) => {
  console.log('Processing:', num)
})

console.log('Synchronous callbacks complete immediately')

console.log('\n=== Asynchronous Callbacks ===\n')

console.log('Start')

// setTimeout uses an asynchronous callback
setTimeout(() => {
  console.log('This runs after 2 seconds')
}, 2000)

console.log("End (but callback hasn't run yet)")

// === SECTION: Error-First Callbacks (Node.js Convention) ===
// In Node.js, callbacks typically follow the pattern: callback(error, result)
// The first parameter is for errors, the second for successful results

console.log('\n=== Error-First Callbacks ===\n')

function readUserData(userId, callback) {
  // Simulate async operation
  setTimeout(() => {
    if (userId < 1) {
      // Error case: pass error as first argument
      callback(new Error('Invalid user ID'), null)
    } else {
      // Success case: pass null for error, data as second argument
      callback(null, { id: userId, name: 'John Doe' })
    }
  }, 1000)
}

// Using the error-first callback
readUserData(5, (error, data) => {
  if (error) {
    console.log('Error:', error.message)
  } else {
    console.log('User data:', data)
  }
})

// Error case
readUserData(-1, (error, data) => {
  if (error) {
    console.log('Error:', error.message)
  } else {
    console.log('User data:', data)
  }
})

// === SECTION: Callback Hell (Problem to Avoid) ===
// Nested callbacks can become hard to read - this is called "callback hell"

console.log('\n=== Callback Hell Example (Anti-pattern) ===\n')

function step1(callback) {
  setTimeout(() => {
    console.log('Step 1 complete')
    callback()
  }, 500)
}

function step2(callback) {
  setTimeout(() => {
    console.log('Step 2 complete')
    callback()
  }, 500)
}

function step3(callback) {
  setTimeout(() => {
    console.log('Step 3 complete')
    callback()
  }, 500)
}

// This nesting gets messy quickly
step1(() => {
  step2(() => {
    step3(() => {
      console.log('All steps complete!')
    })
  })
})

// === SECTION: Real-World Example with File System ===

console.log('\n=== File System Callback Example ===\n')

const fs = require('fs')

// Asynchronous file read with callback
fs.readFile(__filename, 'utf-8', (error, data) => {
  if (error) {
    console.log('Error reading file:', error.message)
  } else {
    console.log('File read successfully!')
    console.log('File size:', data.length, 'characters')
  }
})

// === SECTION: Summary ===

setTimeout(() => {
  console.log('\n=== Callback Summary ===')
  console.log('✓ Callbacks are functions passed as arguments')
  console.log('✓ They enable asynchronous programming')
  console.log('✓ Node.js uses error-first callback convention')
  console.log('✓ Avoid deep nesting (callback hell)')
  console.log('✓ Modern alternatives: Promises and async/await')
}, 3000)
