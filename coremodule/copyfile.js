// file copying sync and async
let fs = require('fs')
fs.copyFileSync('coremodule/abc.txt', 'coremodule/abc_copy.txt')
console.log('sync file copied successfully')

// async file copying
fs.copyFile('coremodule/abc.txt', 'coremodule/abc_copy.txt', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('async file copied successfully')
  }
})
