// Import the JSON
const products = require('../data/products')

function findAll() {
    // Promise is in pending state initially
    return new Promise((resolve, reject)=> {
        resolve(products)
    })
}

// Since used in other module we have to export this find function
module.exports = {
    findAll
}