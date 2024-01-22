const {getById, validateInput} = require('./products')
const productId= async ()=>{
    const id = await validateInput('Masukkan id product: ')
    getById(id)
}


module.exports = productId