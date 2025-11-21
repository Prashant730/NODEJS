/**
 * Filename: index.js
 * Unit: Unit I - Getting Started with Node.js
 * Topic: Creating and Exporting Node.js Modules
 *
 * Purpose:
 *   This file demonstrates how to create a simple Node.js module that exports
 *   functions for use in other files. It's a basic calculator module showing
 *   the module.exports pattern.
 *
 * Learning Objectives:
 *   - Understand how to create reusable modules in Node.js
 *   - Learn the module.exports syntax for exporting functions
 *   - See how to structure a simple npm package
 *
 * Prerequisites:
 *   - Node.js installed
 *   - Understanding of JavaScript functions
 *
 * How to Use:
 *   1. This module is meant to be imported by other files
 *   2. Example usage in another file:
 *      const calc = require('./index')
 *      console.log(calc.add(5, 3))  // Output: 8
 *   3. Run the test file: node test.js
 *
 * Key Concepts:
 *   - module.exports: The object that gets returned when this module is required
 *   - CommonJS: The module system used by Node.js (require/module.exports)
 *   - Reusability: Creating functions that can be used across multiple files
 */

// === SECTION: Function Definitions ===
// These are simple arithmetic functions that will be exported for use elsewhere.

/**
 * Adds two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b
}

/**
 * Subtracts the second number from the first
 * @param {number} a - Number to subtract from
 * @param {number} b - Number to subtract
 * @returns {number} Difference of a and b
 */
function sub(a, b) {
  return a - b
}

// === SECTION: Module Exports ===
// This makes the add and sub functions available to other files that require this module.
// The exported object can be destructured: const { add, sub } = require('./index')
// Or used as: const calc = require('./index'); calc.add(1, 2)

module.exports = { add, sub }
