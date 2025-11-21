/*
 * coremodule/decompress.js
 * Purpose: examples using the `zlib` module to decompress data with different
 * algorithms (Brotli, Inflate, Gunzip). Make sure the referenced files exist.
 * How to run:
 *   1. From `coremodule/` run `node decompress.js`.
 * Notes:
 *   - This script expects .gz or compressed input files like `examplestream1.txt.gz`.
 *   - Adjust filenames to match files you have available in the folder.
 */

// Q- DeCompress data using all the three functions of zlib module
var fs = require('fs')
var zlib = require('zlib')
var reader1 = fs.createReadStream('examplestream1.txt.gz')
var writer1 = fs.createWriteStream('examplestream1.txt')

var gzip = zlib.createBrotliDecompress() // one way of zlib module
reader1.pipe(gzip).pipe(writer1)
console.log('data zipped, check ur editor')

var fs = require('fs')
var zlib = require('zlib')
var reader1 = fs.createReadStream('examplestream1.txt.gz')
var writer1 = fs.createWriteStream('examplestream1.txt')

var gzip = zlib.createInflate() // one way of zlib module
reader1.pipe(gzip).pipe(writer1)
console.log('data zipped, check ur editor')

var fs = require('fs')
var zlib = require('zlib')
var reader1 = fs.createReadStream('examplestream.txt')
var writer1 = fs.createWriteStream('examplestream2.txt.gz')

var gzip = zlib.createInflate() // 2nd way of zlib module
reader1.pipe(gzip).pipe(writer1)
console.log('data zipped, check ur editor')
var fs = require('fs')
var zlib = require('zlib')
var reader1 = fs.createReadStream('examplestream.txt')
var writer1 = fs.createWriteStream('examplestream2.txt.gz')

var gzip = zlib.createGunzip() // third way of zlib module
reader1.pipe(gzip).pipe(writer1)
console.log('data zipped, check ur editor')
