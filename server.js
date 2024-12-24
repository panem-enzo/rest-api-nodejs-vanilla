const http = require('http')
// Import the JSON
const products = require('./data/products')

// Returns an instance of http.Server class
const server = http.createServer((req, res) => {
    // 1. Set status code
    // 2. Set content type to send back
    res.writeHead(200, { 'Content-Type': 'application/json' })
    // 3. Writing to body (Note: we have to convert to string, Express does it automatically though)
    res.end(JSON.stringify(products))
})

// Checks if there is an environment variable first
const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))