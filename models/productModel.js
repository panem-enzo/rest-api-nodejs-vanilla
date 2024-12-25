// Import the JSON
const products = require('../data/products')
const { v4: uuidv4 } = require('uuid')

const { writeDataToFile } = require('../utils')

function findAll() {
    // Promise is in pending state initially
    return new Promise((resolve, reject)=> {
        resolve(products)
    })
}

function findById(id) {
    return new Promise((resolve, reject)=> {
        // find() goes through array in JSON and finds the matching id
        const product = products.find((p) => p.id === id)
        resolve(product)
    })
}

function create(product) {
    return new Promise((resolve, reject)=> {
        // Spread operator: takes all key value fields
        const newProduct = {id: uuidv4(), ...product}
        products.push(newProduct)
        writeDataToFile('./data/products.json', products)
        resolve(newProduct)
    })
}

function update(id, product) {
    return new Promise((resolve, reject)=> {
        const index = products.findIndex((p) => p.id === id)
        products[index] = {id, ...product}
        writeDataToFile('./data/products.json', products)
        resolve(products[index])
    })
}

// Since used in other module we have to export this find function
module.exports = {
    findAll,
    findById,
    create,
    update
}