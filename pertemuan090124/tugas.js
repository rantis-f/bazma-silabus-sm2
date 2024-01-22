// 1. Hari senin - jumat

function angkaHari(hari){
    switch (hari){
        case 1:
            return "Hari Senin"
            break
        case 2:
            return "Hari Selasa"
            break
        case 3:
            return "Hari Rabu"
            break
        case 4:
            return "Hari Kamis"
            break
        case 5:
            return "Hari Jumat"
            break
        default:
            return "Hari Libur"
            break
    }
}

// 2. Bintang persegi panjang
function bintangPersegiPanjang(panjang,lebar){
    for(i = 1;i <= lebar; i ++){
        let a = ' '
        for(j = 1;j <= panjang; j++){
         return   a += '*'
        }
    }
    console.log(a)
}

module.exports = {angkaHari}