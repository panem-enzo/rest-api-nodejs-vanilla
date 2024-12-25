const http = require('http')
// Destructuring
const { getProducts, getProduct, createProduct } = require('./controllers/productController')

// Returns an instance of http.Server class
const server = http.createServer((req, res) => {
    if (req.url === '/api/products' && req.method === 'GET') {
        getProducts(req, res)
    // Find the ID of the product
    // product/1 to product/1000...
    } else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3] // Returns the id number in the url
        getProduct(res, req, id)
    } else if(req.url === '/api/products' && req.method === 'POST') {
        createProduct(req, res)
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route not found' }))
    }
})

// Checks if there is an environment variable first
const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))