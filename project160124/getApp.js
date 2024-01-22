const { questionApp } = require("./products");
const choicesApp = require("./app");

const showApp = async () => {
  console.log("-----Selamat datang di Bootcamp app-----");
  console.log(`  1. Lihat data
  2. Tambah data
  3. Update data
  4. Hapus data`
  );
  console.log("----------------------------------------");

  const choices = await questionApp("Pilih hal yang anda sukai: ")
  const answer = parseInt(choices);
  choicesApp(answer);
  }
showApp();
