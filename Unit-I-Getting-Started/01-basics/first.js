/**
 * Filename: first.js
 * Unit: Unit I - Getting Started with Node.js
 * Topic: Basic JavaScript and Node.js Features
 *
 * Purpose:
 *   This file demonstrates fundamental JavaScript features that are essential
 *   for Node.js development, including function declarations, arrow functions,
 *   and object literals.
 *
 * Learning Objectives:
 *   - Understand traditional function declarations vs arrow functions
 *   - Learn how to use arrow functions for concise syntax
 *   - Work with object literals and methods
 *   - Use console.log() for output in Node.js
 *
 * Prerequisites:
 *   - Node.js installed (check with: node --version)
 *   - Basic understanding of JavaScript syntax
 *
 * How to Run:
 *   1. Navigate to this directory: cd EH/Unit-I-Getting-Started/01-basics
 *   2. Run the file: node first.js
 *   3. Expected output: Various console logs showing function results and object data
 *
 * Key Concepts:
 *   - Function Declaration: Traditional way to define functions with the 'function' keyword
 *   - Arrow Functions: ES6 syntax for more concise function expressions
 *   - Object Literals: Creating objects with properties and methods
 *   - Console Output: Using console.log() to display results
 */

// === SECTION: Traditional Function Declaration ===
// This demonstrates the classic way to declare functions in JavaScript.
// Functions declared this way are hoisted, meaning they can be called before declaration.

function greet() {
  return 'hello node js'
}
console.log(greet())

// === SECTION: Arrow Function Syntax ===
// Arrow functions provide a shorter syntax for function expressions.
// They are especially useful for simple one-line functions.
// Note: Arrow functions do not have their own 'this' context.

var greet1 = () => 'hello node js using arrow'
console.log(greet1())

// === SECTION: Functions with Parameters ===
// Both traditional and arrow functions can accept parameters.
// Here we compare the syntax for a simple addition function.

// Traditional function with parameters
function sum(a, b) {
  return a + b
}
console.log(sum(4, 5)) // Output: 9

// Arrow function equivalent - more concise for simple operations
var sum1 = (a, b) => a + b
console.log(sum1(4, 5)) // Output: 9

// === SECTION: Object Literals ===
// Objects in JavaScript can contain properties (data) and methods (functions).
// This example shows an object with string properties and an arrow function method.

var obj = {
  name: 'arwin', // String property
  city: 'patiala', // String property
  greet: () => {
    // Method using arrow function
    return 'object'
  },
}
console.log(obj) // Displays the entire object structure
