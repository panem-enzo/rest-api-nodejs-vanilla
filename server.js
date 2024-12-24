const http = require('http')
// Destructuring
const { getProducts } = require('./controllers/productController')

// Returns an instance of http.Server class
const server = http.createServer((req, res) => {
    if (req.url === '/api/products' && req.method === 'GET') {
        getProducts(req, res)
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route not found' }))
    }
})

// Checks if there is an environment variable first
const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))