let fs = require('fs')
//async file reading
console.log('started asyncrhronous file reading')
// fs.readFile(path, encoding, callback)
fs.readFile('coremodule/abc.json', 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    let parsed = JSON.parse(data)
    console.log(parsed)
  }
})
console.log('asyncrhronous reading completed')
