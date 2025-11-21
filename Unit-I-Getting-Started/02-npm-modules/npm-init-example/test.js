/**
 * Filename: test.js
 * Unit: Unit I - Getting Started with Node.js
 * Topic: Using Imported Modules
 *
 * Purpose:
 *   This file demonstrates how to import and use a local module.
 *   It tests the calculator functions exported from index.js.
 *
 * How to Run:
 *   1. Navigate to this directory: cd EH/Unit-I-Getting-Started/02-npm-modules/npm-init-example
 *   2. Run: node test.js
 *   3. Expected output: Results of addition and subtraction operations
 *
 * Key Concepts:
 *   - require(): Function to import modules in Node.js
 *   - Relative paths: Using './' to reference files in the same directory
 *   - Module usage: Calling exported functions from imported modules
 */

// === SECTION: Importing the Module ===
// The require() function loads the module from index.js
// './' means "current directory"
const calc = require('./index')

// === SECTION: Using the Imported Functions ===
// Now we can use the add and sub functions from our calculator module

console.log('Testing calculator module:')
console.log('5 + 3 =', calc.add(5, 3)) // Output: 8
console.log('10 - 4 =', calc.sub(10, 4)) // Output: 6
console.log('100 + 50 =', calc.add(100, 50)) // Output: 150
console.log('25 - 15 =', calc.sub(25, 15)) // Output: 10

// Alternative: Destructuring the imports
const { add, sub } = require('./index')
console.log('\nUsing destructured imports:')
console.log('7 + 2 =', add(7, 2)) // Output: 9
console.log('20 - 8 =', sub(20, 8)) // Output: 12
