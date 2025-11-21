/*
 * coremodule/streams.js
 * Purpose: demonstrates readable and writable streams with `fs.createReadStream`
 * and `fs.createWriteStream`. Also shows piping and stream events.
 * How to run:
 *   1. From `coremodule/` run `node streams.js`.
 *   2. Ensure `streamexample.txt` exists in the same folder to see the read output.
 */

var fs = require('fs')
var data1 = ''
var reader = fs.createReadStream('streamexample.txt')
reader.setEncoding('utf-8')
reader.on('data', (chunk) => {
  data1 = data1 + chunk
})
reader.on('end', () => {
  console.log(data1.toLowerCase())
})
reader.on('error', (err) => {
  console.log(err)
})

// var content="grg rrg er errt  f t f"
// var writer=fs.createWriteStream("example1stream.txt")
// writer.write(content,()=>{
//     console.log("content has written and the content is", content)
// })
// writer.end()
// writer.on('finish',()=>{
//     console.log("writing finished")
// })
// writer.on('error',()=>{
//     console.log("error")
// })

// duplex stream
// first writing and then reading the same content

// var content="grg rrg er errt  f t f"
// var writer=fs.createWriteStream("exampleduplexstream.txt")
// writer.write(content,()=>{
//     console.log("content has written and the content is", content)
// })
// writer.end()
// writer.on('finish',()=>{
//     console.log("writing finished")
// })
// writer.on('error',()=>{
//     console.log("error")
// })

// var data1=""
// var reader=fs.createReadStream("exampleduplexstream.txt")
// reader.setEncoding('utf-8')
// reader.on('data',(chunk)=>{
//   data1=data1+chunk
// })
// reader.on('end',()=>{
//     console.log(data1)
// })
// reader.on('error',(err)=>{
//     console.log(err)
// })

// var reader1=fs.createReadStream("examplestream.txt")
// var writer1=fs.createWriteStream("examplepipe.txt")
// writer1.on('pipe',()=>{
//     console.log("data is transferring through pipe")
// })

// // reader1.pipe(writer1)

// reader1.unpipe(writer1)
