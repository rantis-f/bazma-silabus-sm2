const fs = require("fs");
const { resolve } = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const directory = "./db";
if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory);
}

const checkFile = "./db/data.json";
if (!fs.existsSync(checkFile)) {
  fs.writeFileSync(checkFile, '[]', "utf-8");
}

const questionExample = (query) => {
  return new Promise((resolve, reject) => {
    rl.question(query, (answer) => {
      resolve(answer);
    });
  });
};

const addData = async () => {
  const nama = await questionExample("Masukkan nama anda: ");
  const umur = await questionExample("Masukkan umur anda: ");
  const hobi = await questionExample("Masukkan hobi anda: ");

  const data = { nama, umur, hobi };
  const fileDb = fs.readFileSync("./db/data.json", "utf8");
  const dataDiri = JSON.parse(fileDb);

  dataDiri.push(data);
  fs.writeFileSync("./db/data.json", JSON.stringify(dataDiri));
  console.log("Terima kasih sudah memperkenalkan dirinya 😘");
  rl.close();
};

addData();
