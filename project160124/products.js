const { reject } = require("assert");
const generateRandomId = require("./generateRandomId");
const fs = require("fs");
const readline = require("readline");
const { resolve, parse } = require("path");


const directory = "./db";
if (!fs.existsSync(directory)) fs.mkdirSync(directory);

const checkFile = "./db/products.json";
if (!fs.existsSync(checkFile)) fs.writeFileSync(checkFile, "[]", "utf-8");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const productQuestion = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const getProducts = () => {
  const fileProducts = fs.readFileSync(checkFile, "utf-8");
  const data = JSON.parse(fileProducts);
  console.log(data);
  rl.close();
};

const storeProduct = (
  nameProduct,
  description,
  mentor,
  price,
  duration,
  category,
  level
) => {
  const id = generateRandomId(10);
  const product = {
    id,
    nameProduct,
    description,
    mentor,
    price,
    duration,
    category,
    level,
  };
  const file = fs.readFileSync(checkFile, "utf-8");
  const dataProducts = JSON.parse(file);

  dataProducts.push(product);
  fs.writeFileSync(checkFile, JSON.stringify(dataProducts));
  console.log("Terima kasih telah mengirim data produk");

  rl.close();
};

const validateInput = async (question) => {
  let answer;
  do {
    answer = await productQuestion(question);
    if (answer.trim() === "") {
      console.log("Ini wajib diisi!");
    }
  } while (answer.trim() === "");
  return answer;
};

const getById = (id) => {
  const file = fs.readFileSync(checkFile, "utf-8");
  const data = JSON.parse(file);
  const findProductId = data.find((product) => product.id === id);

  if (findProductId) return findProductId;

  rl.close();
};

const updateById = (id, updateProduct) => {
  const file = fs.readFileSync(checkFile, "utf-8");
  const dataProducts = JSON.parse(file);
  const index = dataProducts.findIndex((product) => product.id === id);

  if (index !== -1) {
    dataProducts[index] = { ...dataProducts[index], ...updateProduct };
    fs.writeFileSync(checkFile, JSON.stringify(dataProducts), "utf-8");
    console.log("Successfully update Produk " + id);
  }
  rl.close();
};
const findId = (id) => {
  const file = fs.readFileSync(checkFile, "utf-8");
  const dataProducts = JSON.parse(file);
  const index = dataProducts.findIndex((product) => product.id === id);

  if (index === -1) {
    console.log(`Product dengan id ini ${id} tidak ditemukan`);
    rl.close();
    return false;
  }
  return true;
};

const deleteById = (id) => {
  const file = fs.readFileSync(checkFile, "utf-8");
  const dataProducts = JSON.parse(file);
  const filterProductId = dataProducts.filter((product) => product.id !== id);

  if (filterProductId.length < dataProducts.length) {
    fs.writeFileSync(checkFile, JSON.stringify(filterProductId));
    console.log("Berhasil menghapus data produk: " + id);
  } else {
    console.log(`Produk dengan id ${id} tidak ditemukan`);
  }

  rl.close();
};

questionApp = async (question) => {
  const input = await validateInput(question);
  return input
};





module.exports = {
  productQuestion,
  getProducts,
  storeProduct,
  validateInput,
  getById,
  updateById,
  findId,
  deleteById,
  questionApp,
  rl
};
