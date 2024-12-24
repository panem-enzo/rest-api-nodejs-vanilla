const Product = require('../models/productModel')

// Async = returns a promise
async function getProducts(req, res) {
    try {
        // We need to fetch products, only brought into model not controller
        // Await = makes async function waits for a Promise
        const products = await Product.findAll()

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(products))
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getProducts
}