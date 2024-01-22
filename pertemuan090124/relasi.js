function namaRelasi(nama){
    return `Hello My is ${nama}`
}

function namaDaerah(daerah){
    return `Tempat daerah saya tinggal di ${daerah}`
}

function sekolah(namaSekolah,jurusanSekolah){
    const data = [namaSekolah, jurusanSekolah]
    return data
}

function abdjadArr(abjad){
    const abjadLama =['a','b','c','d']
    if(abjadLama !== undefined){
        abjadLama.push(abjad)
    }
    return abjadLama
}


module.exports = {namaRelasi, namaDaerah, sekolah, abdjadArr}