/*
 * coremodule/compress.js
 * Purpose: examples using the `zlib` module to compress data with different
 * algorithms (BrotliCompress, Deflate, Gzip). Make sure the referenced files exist.
 * How to run:
 *   1. From `coremodule/` run `node compress.js`.
 * Notes:
 *   - This script expects an input file `examplestream.txt` to exist.
 *   - Uncomment the block for the algorithm you want to try.
 */

// Q- Compress data using all the three functions of zlib module
// var fs=require('fs')
// var zlib=require('zlib')
// var reader1=fs.createReadStream('examplestream.txt')
// var writer1=fs.createWriteStream('examplestream1.txt.gz')
//
// var gzip=zlib.createBrotliCompress()  // one way of zlib module
// reader1.pipe(gzip).pipe(writer1)
// console.log("data zipped, check ur editor")
//
// var fs=require('fs')
// var zlib=require('zlib')
// var reader1=fs.createReadStream('examplestream.txt')
// var writer1=fs.createWriteStream('examplestream2.txt.gz')
//
// var gzip=zlib.createDeflate()  // 2nd way of zlib module
// reader1.pipe(gzip).pipe(writer1)
// console.log("data zipped, check ur editor")

var fs = require('fs')
var zlib = require('zlib')
var reader1 = fs.createReadStream('examplestream.txt')
var writer1 = fs.createWriteStream('examplestream2.txt.gz')

var gzip = zlib.createGzip() // third way of zlib module
reader1.pipe(gzip).pipe(writer1)
console.log('data zipped, check ur editor')
