# Node.js REPL (Read-Eval-Print Loop)

**Unit:** Unit I - Getting Started with Node.js
**Topic:** Using the Node.js REPL for Interactive Development

## What is REPL?

REPL stands for Read-Eval-Print Loop. It's an interactive programming environment that:

- **Reads** user input
- **Evaluates** the code
- **Prints** the result
- **Loops** back to read more input

The Node.js REPL is perfect for testing JavaScript code snippets, experimenting with Node.js APIs, and learning.

## How to Start the REPL

1. Open your terminal or command prompt
2. Type `node` and press Enter
3. You'll see a prompt like `>`

## Basic REPL Commands

### Simple Expressions

```javascript
> 2 + 2
4
> "Hello" + " " + "World"
'Hello World'
```

### Variables

```javascript
> let x = 10
undefined
> x * 5
50
```

### Functions

```javascript
> function greet(name) { return `Hello ${name}`; }
undefined
> greet("Node.js")
'Hello Node.js'
```

### Special REPL Commands

- `.help` - Show all REPL commands
- `.exit` - Exit the REPL (or press Ctrl+C twice)
- `.save filename` - Save current REPL session to a file
- `.load filename` - Load a file into the REPL
- `.clear` - Clear the REPL context

## Try These Examples

Start the REPL (`node`) and try:

```javascript
// Arrow functions
> const add = (a, b) => a + b
> add(5, 3)

// Arrays
> const arr = [1, 2, 3, 4, 5]
> arr.map(x => x * 2)

// Objects
> const person = { name: "Alice", age: 25 }
> person.name

// Node.js modules
> const os = require('os')
> os.platform()
> os.cpus().length
```

## When to Use REPL

- Quick testing of JavaScript syntax
- Exploring Node.js built-in modules
- Debugging small code snippets
- Learning new JavaScript features
- Calculating values or testing expressions

## Exiting the REPL

- Type `.exit` and press Enter
- Press `Ctrl+C` twice
- Press `Ctrl+D` once (on Unix-like systems)
