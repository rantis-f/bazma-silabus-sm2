const showProduct = require("./getProduct");
const addProduct = require("./storeProduct");
const update = require("./updateById");
const deleteProduct = require("./deleteById");
const { rl } = require("./products");

const choicesApp = (choice) => {
  switch (choice) {
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
