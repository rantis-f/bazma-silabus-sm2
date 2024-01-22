const fs = require("fs");
const readline = require("readline"); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama lengkap: ", (nama) => {
  rl.question('Masukkan umur anda: ', (umur) => {
    rl.question('Masukkan sekolah anda: ', (sekolah) =>{
      // console.log("--Data Saya--");
      // console.log(`Nama lengkap saya adalah ${nama} berumur ${umur} dan bersekolah di ${sekolah}`);


      const data = {nama, umur, sekolah}
      const fileDb = fs.readFileSync('./db/data.json','utf8')
      const dataDiri = JSON.parse(fileDb)

      dataDiri.push(data)
      fs.writeFileSync('./db/data.json',JSON.stringify(dataDiri))
      console.log('Terima kasih sudah memperkenalkan dirinya 😘')
      rl.close();
    })
  });
});
