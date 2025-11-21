// callback nesting

// var fs=require('fs')
// fs.readFile('streamexample.txt','utf-8',(err,data)=>{
//     if(err){console.log(err)}
//     else(console.log(data))

//     var data="callback nesting"
//     fs.writeFile('callbacknest.txt',data,(err)=>{
//         if(err){console.log(err)}
//         else{console.log(data)}
//     })

//     fs.readFile('callbacknest.txt','utf-8',(err,data)=>{
//         if(err){console.log(err)}
//         else{console.log(data)}
//     })
// })

// var fs=require('fs').promises  // then catch
// fs.readFile('streamexample.txt','utf-8')
// .then((data)=>{
//     console.log(data)
//     return data
// })
// .then(()=>{
//     content="content in promises"
//     return fs.writeFile('contentpromises.txt',content)
// })
// .then((data)=>{
//     return fs.readFile('contentpromises.txt','utf8')
// })
// .then((finaldata)=>{
//     console.log(finaldata)
// })
// .catch((error)=>{
//     console.log(error)
// })

/*
 * coremodule/promises.js
 * Purpose: demonstrates callback nesting, Promises with `.then()` and async/await
 * using `fs.promises`.
 * How to run:
 *   1. From `coremodule/` run `node promises.js`.
 * Notes:
 *   - The script reads `streamexample.txt` and writes `asyncwrite.txt` as an example.
 */

var fs = require('fs').promises // using async-await, using try-catch
async function processfiles() {
  try {
    var data = await fs.readFile('streamexample.txt', 'utf-8')
    console.log(data)
    data1 = 'jdhfuihf'
    await fs.writeFile('asyncwrite.txt', data1)
    var writtendata = await fs.readFile('asyncwrite.txt', 'utf-8')
    console.log(writtendata)
  } catch (err) {
    console.log(err)
  }
}
processfiles()
