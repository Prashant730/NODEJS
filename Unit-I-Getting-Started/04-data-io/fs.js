/**
 * Filename: fs.js
 * Unit: Unit I - Getting Started with Node.js
 * Topic: Data I/O - File System Operations
 *
 * Purpose:
 *   This file demonstrates Node.js's 'fs' (File System) module, which provides
 *   functions for working with files and directories. It shows both synchronous
 *   and asynchronous file operations, and includes an HTTP server that performs
 *   file operations based on URL routes.
 *
 * Learning Objectives:
 *   - Understand synchronous vs asynchronous file operations
 *   - Learn to read and write files (text and JSON)
 *   - Master file copying and deletion
 *   - Combine fs module with HTTP servers
 *   - Handle file operation errors properly
 *
 * Prerequisites:
 *   - Node.js installed (check with: node --version)
 *   - Understanding of callbacks
 *   - Basic HTTP server knowledge
 *
 * How to Run:
 *   1. Navigate to this directory: cd EH/Unit-I-Getting-Started/04-data-io
 *   2. Create a test file: echo "Hello World" > abccopy.txt
 *   3. Run: node fs.js
 *   4. Open browser: http://localhost:3000
 *   5. Try routes: /fread (read file), / (dashboard)
 *   6. Stop server: Press Ctrl+C
 *
 * Key Concepts:
 *   - Synchronous operations: Block code execution until complete (use *Sync methods)
 *   - Asynchronous operations: Non-blocking, use callbacks (preferred in Node.js)
 *   - Error handling: Always check for errors in callbacks
 *   - File encoding: 'utf-8' for text files
 *   - JSON operations: Use JSON.parse() and JSON.stringify()
 */
// === SECTION: Synchronous File Reading ===
// Synchronous operations block the entire program until they complete.
// Use these only for initialization or when you need sequential execution.

// var fs=require('fs')
// console.log("started synchronous reading")
//
// // readFileSync() blocks until the file is completely read
// var data=fs.readFileSync('abc.txt','utf-8')
// console.log(data)
//
// console.log("sync reading completed")
//
// Note: The program waits at readFileSync() - nothing else can happen during this time

// === SECTION: Asynchronous File Reading ===
// Asynchronous operations don't block - the program continues while the file is being read.
// This is the preferred approach in Node.js for better performance.

// console.log("started async reading")
//
// // readFile() returns immediately, callback is called when done
// fs.readFile('abc.txt','utf-8',(err,data)=>{
//     // Error-first callback pattern: check err first
//     if(err){console.log(err)}
//     else{console.log(data)}
// })
//
// // This prints BEFORE the file is read!
// console.log("async reading completed")
//
// Note: "async reading completed" prints before the file content because
// the file read happens in the background

// console.log("started async reading")
// fs.readFile('abc.json','utf-8',(err,data)=>{
//     if(err){console.log(err)}
//     else{
//         var parsed=JSON.parse(data)
//         console.log(parsed)}
// })
// console.log("async reading completed")

// file writing- sync and async

// var content="This is node js class"
// fs.writeFileSync("abc1.txt",content)
// console.log("file written success")

// fs.writeFile('abc2.txt',content,(err)=>{
//     if(err){console.log(err)}
//     else {console.log("file written success")}
// })

// var data1={name:"Arwin"}
// var parsed=JSON.stringify(data1)
// fs.writeFileSync('abc1.json',parsed)

// copying sync and asyn

// fs.copyFileSync('abc.txt','abccopy.txt')
// console.log("copy sync done")

// fs.copyFile('abc.txt','abcasyn.txt',(err)=>{
//     if(err){console.log(err)}
// })
// console.log("copy async done")

// del

// fs.unlinkSync('abc1.txt')
// fs.unlink('abc.json',(err)=>{
//     if(err){console.log(err)}
//     else{console.log("deleted")}
// })

// server fs questions

// var http=require('http')
// var fs=require('fs')
// http.createServer((req,res)=>{
// //   fs.readFile('abccopy.txt','utf-8',(err,data)=>{
// //         if(err){res.end(err)}
// //         else{res.end(data)}
// //   })
//     fs.unlink('abccopy.txt',(err)=>{
//         if(err){res.end("err")}
//         else{res.end("file deleted success")}
//     })
// }).listen(3000,()=>{console.log("open browser")})

// creating different links
var http = require('http')
var fs = require('fs')
http
  .createServer((req, res) => {
    if (req.url == '/fread') {
      fs.readFile('abccopy.txt', 'utf-8', (err, data) => {
        if (err) {
          res.end(err)
        } else {
          res.end(data)
        }
      })
    } else if (req.url == '/fwrite') {
    } else {
      res.writeHead(200, { 'content-type': 'text/html' })
      res.end(`<h1>Dashboard</h1>
            <a href="/fread">file read</a>
            <a href="/fwrite">file write</a>
            `)
    }
  })
  .listen(3000, () => {
    console.log('open browser')
  })
