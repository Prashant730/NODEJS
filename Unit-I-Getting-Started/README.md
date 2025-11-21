# Unit I: Getting Started with Node.js

## Unit Overview

This unit introduces the fundamentals of Node.js development, covering basic JavaScript features, the Node.js runtime environment, core modules, event-driven programming, and file system operations. By the end of this unit, you'll understand how Node.js works and be able to create simple applications using built-in modules.

## Learning Goals

- Understand what Node.js is and how it differs from browser JavaScript
- Master the Node.js REPL for interactive development
- Learn to work with npm and create Node.js modules
- Understand event-driven programming with EventEmitter
- Perform file system operations (read, write, stream)
- Work with asynchronous programming patterns (callbacks, promises, async/await)

## Topics and Files

### 01-basics/

**Topic:** Introduction to Node.js and Basic JavaScript

- `first.js` - Basic JavaScript features (functions, arrow functions, objects)
- `repl-examples.md` - Guide to using the Node.js REPL

**Learning Focus:** JavaScript fundamentals, function syntax, Node.js execution

**How to Run:**

```bash
cd 01-basics
node first.js
```

---

### 02-npm-modules/

**Topic:** NPM, Modules, and Core Modules

- `module-types.md` - Guide to core, local, and third-party modules
- `os-module-demo.js` - Demonstrates the OS core module
- `npm-init-example/` - Complete npm package example
  - `package.json` - Package configuration
  - `index.js` - Calculator module with exports
  - `test.js` - Example of importing and using the module
  - `package.README.md` - Detailed package documentation

**Learning Focus:** Module system, require(), module.exports, npm basics

**How to Run:**

```bash
cd 02-npm-modules
node os-module-demo.js

cd npm-init-example
node test.js
```

---

### 03-events-callbacks/

**Topic:** Events and Callbacks

- `events.js` - EventEmitter basics (on, once, emit, removeListener)
- `callbacks-demo.js` - Understanding callbacks and async programming
- `eventpractice.js` - Event counter with file persistence

**Learning Focus:** Event-driven architecture, EventEmitter, callback patterns

**How to Run:**

```bash
cd 03-events-callbacks
node events.js
node callbacks-demo.js
node eventpractice.js
```

---

### 04-data-io/

**Topic:** Data Input/Output and File Operations

- `fs.js` - File system operations (read, write, copy, delete)
- `streams.js` - Working with readable and writable streams
- `compress.js` - File compression using zlib module
- `decompress.js` - File decompression using zlib module
- `promises.js` - Async/await patterns with file operations
- `streamexample.txt` - Sample file for stream examples

**Learning Focus:** File I/O, streams, compression, promises, async/await

**How to Run:**

```bash
cd 04-data-io
node fs.js          # Then visit http://localhost:3000
node streams.js
node promises.js
node compress.js    # Requires streamexample.txt
```

---

## Recommended Study Order

1. **Start with basics** - Run `01-basics/first.js` and experiment with the REPL
2. **Learn modules** - Read `02-npm-modules/module-types.md`, then explore the examples
3. **Understand events** - Work through `03-events-callbacks/` in order
4. **Master file I/O** - Complete `04-data-io/` examples, starting with `fs.js`

## Common Commands for This Unit

```bash
# Check Node.js version
node --version

# Run a JavaScript file
node filename.js

# Start the Node.js REPL
node

# Exit the REPL
.exit

# Initialize a new npm package
npm init

# Install dependencies (when package.json exists)
npm install
```

## Key Concepts Summary

### Node.js Basics

- Node.js is a JavaScript runtime built on Chrome's V8 engine
- It's event-driven and non-blocking (asynchronous)
- Perfect for I/O-intensive applications

### Module System

- **Core modules**: Built-in (fs, http, os, events, etc.)
- **Local modules**: Your own files (use require('./file'))
- **Third-party modules**: From npm (install first)

### Event-Driven Programming

- EventEmitter is the foundation of Node.js events
- Use `on()` to listen, `emit()` to trigger
- Callbacks are functions passed as arguments

### Asynchronous Patterns

1. **Callbacks**: Traditional Node.js pattern (error-first)
2. **Promises**: Modern approach with .then() and .catch()
3. **Async/Await**: Cleanest syntax for async code

### File Operations

- Synchronous methods block execution (\*Sync)
- Asynchronous methods use callbacks (preferred)
- Streams are efficient for large files
- Always handle errors in file operations

## Prerequisites for Next Unit

Before moving to Unit II (HTTP Services), make sure you:

- ✓ Can run Node.js files from the command line
- ✓ Understand callbacks and asynchronous programming
- ✓ Know how to require and use modules
- ✓ Can perform basic file operations
- ✓ Understand EventEmitter basics

## Troubleshooting

**Problem:** "node: command not found"

- **Solution:** Install Node.js from nodejs.org

**Problem:** "Cannot find module"

- **Solution:** Check your require() path, use ./ for local files

**Problem:** "ENOENT: no such file or directory"

- **Solution:** File doesn't exist, check the filename and path

**Problem:** File operations not working

- **Solution:** Ensure you're in the correct directory, check file permissions

## Additional Resources

- Node.js Official Docs: https://nodejs.org/docs
- NPM Documentation: https://docs.npmjs.com
- EventEmitter Guide: https://nodejs.org/api/events.html
- File System API: https://nodejs.org/api/fs.html

## Next Unit

Once you're comfortable with these concepts, proceed to:
**Unit II: HTTP Services** - Learn to create web servers and build REST APIs with Express.js

---

_Happy Learning! 🚀_
