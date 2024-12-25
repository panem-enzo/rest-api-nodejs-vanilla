const Product = require('../models/productModel')

// Async = returns a promise
// @desc    Gets All Products
// @route   GET/api/products
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

// @desc    Gets Single Product
// @route   GET /api/products/:id
async function getProduct(req, res, id) {
    try {
        
        const product = await Product.findById(id)
        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Not Found' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(product))
        }

    } catch (error) {
        console.log(error)
    }
}

// @desc    Create a Product
// @route   POST /api/products
async function createProduct(req, res) {
    try {
        // We don't include ID, we want it to automatically be added (as in a database)
        const product = {
            title: 'Test Product',
            description: 'This is my product',
            price: 100
        }

        const newProduct = await Product.create(product)

        // 201: Created successfully
        res.writeHead(201, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(newProduct))

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct
}