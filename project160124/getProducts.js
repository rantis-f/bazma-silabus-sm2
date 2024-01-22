const { get } = require('http')
const {getProducts} = require('./products')

showProduct= () => {
   getProducts()
}
module.exports = showProduct