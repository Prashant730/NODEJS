# Calculator Module (arwincal999)

**Unit:** Unit I - Getting Started with Node.js
**Topic:** NPM Package Creation and Module Exports

## Purpose

This is a simple calculator module that demonstrates:

- How to initialize an npm package using `npm init`
- How to structure a Node.js module with exports
- How to create a package.json file
- How to use the CommonJS module system

## Package Structure

```
npm-init-example/
├── package.json      # Package metadata and configuration
├── index.js          # Main module file with calculator functions
├── test.js           # Example usage of the module
└── package.README.md # This file
```

## Dependencies

This package has **no external dependencies**. It uses only built-in JavaScript features.

## Installation

Since this is a local module for learning purposes, no installation is needed. However, if you wanted to use it in another project:

```bash
# From another project directory
npm install /path/to/this/folder
```

## Usage

### Basic Usage

```javascript
// Import the module
const calc = require('./index')

// Use the functions
console.log(calc.add(5, 3)) // Output: 8
console.log(calc.sub(10, 4)) // Output: 6
```

### Destructured Import

```javascript
const { add, sub } = require('./index')

console.log(add(7, 2)) // Output: 9
console.log(sub(20, 8)) // Output: 12
```

## Available Functions

### `add(a, b)`

Adds two numbers together.

- **Parameters:** `a` (number), `b` (number)
- **Returns:** Sum of a and b

### `sub(a, b)`

Subtracts the second number from the first.

- **Parameters:** `a` (number), `b` (number)
- **Returns:** Difference of a and b

## NPM Scripts

### `npm test`

Currently returns an error message. In a real project, this would run your test suite.

```bash
npm test
```

## Package.json Explained

- **name**: The package name (must be unique if publishing to npm)
- **version**: Semantic version number (major.minor.patch)
- **description**: Brief description of what the package does
- **keywords**: Tags for npm search
- **license**: ISC license (permissive open-source license)
- **author**: Package creator information
- **type**: "commonjs" means we're using require/module.exports
- **main**: Entry point file (index.js)
- **scripts**: Commands that can be run with `npm run <script-name>`

## How to Run the Example

```bash
# Navigate to this directory
cd EH/Unit-I-Getting-Started/02-npm-modules/npm-init-example

# Run the test file
node test.js
```

## Learning Points

1. **Module Pattern**: Functions are defined and then exported using `module.exports`
2. **Reusability**: Once exported, these functions can be used in any file that requires this module
3. **Package Metadata**: package.json contains important information about the module
4. **CommonJS**: Node.js uses the CommonJS module system (require/exports)

## Next Steps

Try extending this module:

- Add multiplication and division functions
- Add error handling for division by zero
- Create more complex mathematical operations
- Write actual tests using a testing framework like Jest or Mocha
