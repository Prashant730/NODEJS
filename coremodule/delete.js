// file deleting sync and async

let fs = require('fs')
fs.unlinkSync('coremodule/a.txt')
console.log('sync file deleted successfully')

// async file deleting
fs.unlink('coremodule/b.txt', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('async file deleted successfully')
  }
})
