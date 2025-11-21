var exp = require('express')
var obj = new exp()
var body = require('body-parser')
var fs = require('fs')
var encoded = exp.urlencoded({ extended: true })

obj.get('/showform', (req, res) => {
  res.sendFile(__dirname + '/deleteFile.html')
})

obj.post('/file', encoded, (req, res) => {
  var file = req.body.filename
  fs.unlink(file, (err) => {
    if (err) {
      res.send(err)
    } else {
      res.send('file deleted Successfully')
    }
  })
})

obj.listen(3002, () => {
  console.log('server running')
})
