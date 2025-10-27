// nodemon http first we have to run this command then only we can see the changes without restarting the server

// sending a normal string response to server
// let http = require('http')
// http
//   .createServer((req, res) => {
//request, response use for communication between client and server
//     res.write('hello server')
//     res.end()
//   })
//   .listen(5000, () => {
//     console.log('server running')
//   })

// ctrl + c to stop server

// sending a normal integer response to server
// let http = require('http')
// http
//   .createServer((req, res) => {
//     //request, response use for communication between client and server
//     res.write(`the number is ${10}\n`)
//     let a = 20
//     res.write(a.toString())
//     res.end()
//   })
//   .listen(5000, () => {
//     console.log('server running')
//   })

// sending a sum of two integer response to server
// let http = require('http')
// http
//   .createServer((req, res) => {

//     function sum(a, b) {
//       return a + b
//     }
//     let a = sum(2, 50)
//     res.write(a.toString())
//     res.end()
//   })
//   .listen(5000, () => {
//     console.log('server running')
//   })

// sending a factorial response to server
let http = require('http')
http
  .createServer((req, res) => {
    function factorial(a) {
      return a <= 1 ? 1 : a * factorial(a - 1)
    }
    let a = factorial(4)
    res.write(a.toString())
    res.end()
  })
  .listen(5000, () => {
    console.log('server running')
  })
