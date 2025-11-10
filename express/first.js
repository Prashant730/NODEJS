// var express = require('express')
// var obj = express()
// obj.get('/', (req, res) => {
//   res.send('Hi express')
// })
// obj.get('/home', (req, res) => {
//   res.sendFile(__dirname + '/first.html')
// })
// obj.get('/index', (req, res) => {
//   res.sendFile(__dirname + '/first.html')
// })
// obj.listen(3000, () => {
//   console.log('server is running on port 3000')
// })
var express = require('express')
var obj = express()
obj.get('/', (req, res) => {
  res.send('Hi express')
})
obj.get('/home', (req, res) => {
  res.sendFile(__dirname + '/first.html')
})
obj.get('/login', (req, res) => {
  res.sendFile(__dirname + '/first.html')
})
obj.get('/getsend', (req, res) => {
  // res.send({
  //     name:req.query.n1,
  //     pass:req.query.n2
  // })
  ;(num1 = parseInt(req.query.num1)), //form field are in string , so parse it accordingly
    (num2 = parseInt(req.query.num2))
  c = num1 + num2
  res.send(`The result is ${c}`)
})
obj.listen(3000, () => {
  console.log('server is running on port 3000')
})
