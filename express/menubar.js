var exp = require('express')
var obj = new exp()
var body = require('body-parser')
var fs = require('fs')
var encoded = exp.urlencoded({ extended: true })

obj.use(exp.static(__dirname))

obj.get('/showform', (req, res) => {
  res.sendFile(__dirname + '/menubar.html')
})

obj.post('/copy', encoded, (req, res) => {
  var src = req.body.src
  var dest = req.body.dest
  fs.copyFile(src, dest, (err) => {
    if (err) {
      res.send(err)
    } else {
      res.send('file copied Successfully')
    }
  })
})

obj.post('/write', encoded, (req, res) => {
  var file = req.body.filename
  var data = req.body.data
  fs.writeFile(file, data, (err) => {
    if (err) {
      res.send(err)
    } else {
      res.send('file written Successfully')
    }
  })
})

obj.post('/delete', encoded, (req, res) => {
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
