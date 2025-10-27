let fs = require('fs')

// First read: Gets content of abc.txt and decodes it as UTF-8 text
// Second read: Gets raw buffer (no encoding specified)
// Program waits at each read until the file is fully read
// Output order is guaranteed:
// "started syncrhronous file reading"
// Content of file (as text)
// Blank line
// Content of file (as buffer)
// "syncrhronous reading completed"

//sync file reading
console.log('started syncrhronous file reading')
// let data = fs.readFileSync(path, encoding)
let data = fs.readFileSync('coremodule/abc.txt', 'utf-8')
let data1 = fs.readFileSync('coremodule/abc.txt')
console.log(data)

console.log()

console.log(data1)
console.log('syncrhronous reading completed')

//async file reading

// Reads file without blocking
// Callback function runs when read completes
// Output order is NOT guaranteed, but you'll see:
// "started asyncrhronous file reading"
// "asyncrhronous reading completed"
// File content (or error) prints later when ready

console.log('started asyncrhronous file reading')
// fs.readFile(path, encoding, callback)
fs.readFile('coremodule/abc.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})
console.log('asyncrhronous reading completed')

// -------------------------------------------------------------------------------------------------
// The key differences:

// Sync (readFileSync):
// Blocks code execution
// Simpler to write
// Use for startup/config

// Async (readFile):
// Non-blocking
// Better for performance
// Use for most operations
