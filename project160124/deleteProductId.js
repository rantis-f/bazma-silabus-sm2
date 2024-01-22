const { deleteById, validateInput } = require("./products");

const deleteProduct = async () => {
  const id = await validateInput("Masukkan id produk: ");
  deleteById(id);
};


module.exports = deleteProduct