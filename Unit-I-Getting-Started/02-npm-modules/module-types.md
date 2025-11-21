# Node.js Module Types

**Unit:** Unit I - Getting Started with Node.js
**Topic:** Understanding Different Types of Modules

## Overview

Node.js has three main types of modules that you'll work with:

1. **Core Modules** (Built-in)
2. **Local Modules** (Your own files)
3. **Third-Party Modules** (From npm)

## 1. Core Modules (Built-in)

These modules come pre-installed with Node.js. No `npm install` required!

### Common Core Modules

| Module   | Purpose                 | Example Usage                     |
| -------- | ----------------------- | --------------------------------- |
| `fs`     | File system operations  | Reading/writing files             |
| `http`   | HTTP server and client  | Creating web servers              |
| `path`   | File path utilities     | Joining paths, getting extensions |
| `os`     | Operating system info   | CPU, memory, platform details     |
| `events` | Event emitter           | Creating custom events            |
| `stream` | Streaming data          | Reading large files efficiently   |
| `crypto` | Cryptographic functions | Hashing, encryption               |
| `util`   | Utility functions       | Promisify, formatting             |

### How to Use Core Modules

```javascript
// Simply require them - no installation needed
const fs = require('fs')
const http = require('http')
const os = require('os')

// Use them immediately
console.log(os.platform())
```

### Examples in This Unit

- `os-module-demo.js` - Demonstrates the `os` module
- Files in `04-data-io/` - Demonstrate `fs`, `stream`, and `zlib` modules
- Files in `03-events-callbacks/` - Demonstrate the `events` module

## 2. Local Modules (Your Own Files)

These are JavaScript files you create in your project.

### Creating a Local Module

**File: calculator.js**

```javascript
function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

// Export functions for use in other files
module.exports = { add, subtract }
```

### Using a Local Module

**File: app.js**

```javascript
// Use relative path with './' or '../'
const calc = require('./calculator')

console.log(calc.add(5, 3)) // 8
console.log(calc.subtract(10, 4)) // 6
```

### Path Conventions

- `./` - Current directory
- `../` - Parent directory
- `../../` - Two directories up

### Example in This Unit

- `npm-init-example/` folder demonstrates local modules
  - `index.js` exports functions
  - `test.js` imports and uses them

## 3. Third-Party Modules (npm Packages)

These are modules created by the community and published to npm (Node Package Manager).

### Popular Third-Party Modules

| Module     | Purpose               | Category        |
| ---------- | --------------------- | --------------- |
| `express`  | Web framework         | Web Development |
| `lodash`   | Utility functions     | Utilities       |
| `axios`    | HTTP requests         | Networking      |
| `mongoose` | MongoDB ODM           | Database        |
| `dotenv`   | Environment variables | Configuration   |
| `jest`     | Testing framework     | Testing         |

### Installing Third-Party Modules

```bash
# Install a single package
npm install express

# Install multiple packages
npm install express body-parser cors

# Install as dev dependency
npm install --save-dev jest

# Install globally
npm install -g nodemon
```

### Using Third-Party Modules

```javascript
// After npm install express
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000)
```

### package.json

Third-party modules are tracked in `package.json`:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "jest": "^29.0.0"
  }
}
```

### Examples in Later Units

- Unit II uses `express` (third-party module)
- Unit III uses `cookie-parser`, `express-session` (third-party modules)

## Module Resolution

When you use `require()`, Node.js searches in this order:

1. **Core modules** - Checked first (e.g., `require('fs')`)
2. **Relative paths** - If starts with `./` or `../` (e.g., `require('./myfile')`)
3. **node_modules** - Searches up directory tree for node_modules folder
4. **Global modules** - Checks global installation directory

## CommonJS vs ES Modules

### CommonJS (Traditional - Used in this course)

```javascript
// Exporting
module.exports = { add, subtract }

// Importing
const calc = require('./calculator')
```

### ES Modules (Modern - ES6+)

```javascript
// Exporting
export { add, subtract }

// Importing
import { add, subtract } from './calculator.js'
```

**Note:** This course uses CommonJS syntax, which is still the default in Node.js.

## Best Practices

1. **Use core modules when possible** - They're optimized and always available
2. **Keep local modules organized** - Group related functionality
3. **Check npm package popularity** - Use well-maintained packages
4. **Lock dependency versions** - Use package-lock.json
5. **Minimize dependencies** - Only install what you need
6. **Read documentation** - Understand modules before using them

## Quick Reference

```javascript
// Core module
const fs = require('fs')

// Local module (same directory)
const myModule = require('./myModule')

// Local module (parent directory)
const utils = require('../utils')

// Third-party module (from node_modules)
const express = require('express')
```

## Summary

- **Core modules**: Built-in, no installation, use directly
- **Local modules**: Your files, use relative paths
- **Third-party modules**: From npm, install first, then require

Understanding these three types is fundamental to Node.js development!
