var express = require('express')
var obj = new express()
var encoded = express.urlencoded({ extended: true })

obj.get('/postlogin', (req, res) => {
  res.sendFile(__dirname + '/factorial.html')
})

obj.post('/formfactorial', encoded, (req, res) => {
  const num = parseInt(req.body.n1)

  // Calculate factorial
  function factorial(n) {
    if (n < 0) return 'Invalid input (negative number)'
    if (n === 0 || n === 1) return 1
    let result = 1
    for (let i = 2; i <= n; i++) {
      result *= i
    }
    return result
  }

  const fact = factorial(num)

  // Send HTML response with the result
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Factorial Result</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .result { background-color: #f0f0f0; padding: 20px; border-radius: 5px; margin: 20px 0; }
        .number { font-size: 18px; color: #333; }
        .factorial { font-size: 24px; color: #0066cc; font-weight: bold; }
        a { color: #0066cc; text-decoration: none; }
        a:hover { text-decoration: underline; }
      </style>
    </head>
    <body>
      <h2>Factorial Result</h2>
      <div class="result">
        <p class="number">Number: ${num}</p>
        <p class="factorial">Factorial: ${fact}</p>
      </div>
      <a href="/postlogin">Calculate Another Factorial</a>
    </body>
    </html>
  `)
})

obj.listen(3001, () => {
  console.log('server is running on port 3001')
})
