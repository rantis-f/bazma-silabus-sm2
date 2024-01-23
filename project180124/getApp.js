const choicesApp = require('./app')
const {validateInput} = require('./products')

const showApp = async () =>{
    console.log("----Selamat datang di Bootcamp App----")
    console.log(`    1. Lihat data
    2. Tambah data
    3. Update data
    4. Hapus data`)
    console.log("--------------------------------------")

    const choices = await validateInput('Pilih hal yang anda sukai: ')
    const answer = parseInt(choices)
    choicesApp(answer)
}

showApp()