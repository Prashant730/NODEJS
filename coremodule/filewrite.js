// file writing sync and async

//sync file writing
let fs = require('fs')
let content = 'This is node js class'
fs.writeFileSync('abc.txt', content)
console.log('sync file written successfully')

// async file writing
fs.writeFile('abc2.txt', content, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('async file written successfully')
  }
})

var data1 = { name: 'Prashant' }
var parsed = JSON.stringify(data1)
fs.writeFileSync('abc1.json', parsed)
