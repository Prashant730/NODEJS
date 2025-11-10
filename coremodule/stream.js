var fs = require('fs')

//for reading files in chunks using streams
// var data1 = ''
// let reader = fs.createReadStream('streamExample.txt')
// reader.setEncoding('utf-8')
// reader.on('data', (chunk) => {
//   data1 += chunk
// })
// reader.on('end', () => {
//   console.log(data1)
// })
// reader.on('error', (err) => {
//   console.log(err)
// })

//for writing files in chunks using streams
// var content = ' etr rtre tyu iuy'
// var writer = fs.createWriteStream('example1stream.txt')
// writer.write(content, () => {
//   console.log('content has written and the content is ', content)
// })
// writer.end()
// writer.on('finish', () => {
//   console.log('writing finished')
// })
// writer.on('error', () => {
//   console.log('error')
// })

var reader1 = fs.createReadStream('example1stream.txt')
var writer1 = fs.createWriteStream('examplepipe.txt') //pipe event is used to transfer the data
writer1.on('pipe', () => {
  console.log('data is transferring through pipe')
})
reader1.pipe(writer1)
