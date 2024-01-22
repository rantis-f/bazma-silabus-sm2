const showProduct = require("./getProducts");
const addProduct = require("./storeProduct");
const update = require("./updateById");
const deleteProduct = require("./deleteProductId");
const { Module } = require("module");
const { rl } = require("./products");

choicesApp = (choices) => {
  switch (choices) {
    case 1:
      showProduct();
      break;
    case 2:
      addProduct();
      break;
    case 3:
      update();
      break;
    case 4:
      deleteProduct();
      break;
    default:
      console.log("Pilihan tidak ditemukan");
      rl.close();
      break;
  }
};

module.exports = choicesApp;
