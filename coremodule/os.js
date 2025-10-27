let http = require('http')
let os = require('os')
http
  .createServer((req, res) => {
    res.write(`os.arch(): ${os.arch()}`)
    res.write(`os.freemem(): ${os.freemem()}`)
    res.write(`os.totalmem(): ${os.totalmem()}`)
    res.end()
  })
  .listen(5000, () => {
    console.log('server running')
  })
