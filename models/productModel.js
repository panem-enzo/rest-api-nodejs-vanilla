// Import the JSON
const products = require('../data/products')

function findAll() {
    // Promise is in pending state initially
    return new Promise((resolve, reject)=> {
        resolve(products)
    })
}

function findById(id) {
    // Promise is in pending state initially
    return new Promise((resolve, reject)=> {
        // find() goes through array in JSON and finds the matching id
        const product = products.find((p) => p.id === id)
        resolve(product)
    })
}

// Since used in other module we have to export this find function
module.exports = {
    findAll,
    findById
}