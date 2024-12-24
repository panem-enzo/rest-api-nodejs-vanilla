const http = require('http')
// Import the JSON
const products = require('./data/products')

// Returns an instance of http.Server class
const server = http.createServer((req, res) => {
    // 1. Set status code
    res.statusCode = 200
    // 2. Set content type to send back
    res.setHeader('Content-Type', 'text/html')
    // 3. Writing to body
    res.write('<h1>Hello World!</h1>')
    // 4. No more data will be written
    res.end()
})

// Checks if there is an environment variable first
const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))