const { storeProduct, validateInput } = require("./products");

const addProduct = async () => {
  const nameProduct = await validateInput("Masukkan nama produk: ");
  const description = await validateInput("Masukkan deskipsi produk: ");
  const mentor = await validateInput("Masukkan nama mentor: ");
  const price = await validateInput("Masukkan harga produk: ");
  const duration = await validateInput("Masukkan durasi penggunaan produk: ");
  const category = await validateInput("Masukkan kategori produk: ");
  const level = await validateInput("Masukkan level produk: ");

  storeProduct(
    nameProduct,
    description,
    mentor,
    price,
    duration,
    category,
    level
  );
};

module.exports = addProduct
