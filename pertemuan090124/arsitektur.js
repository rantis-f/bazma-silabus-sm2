const getClass = (code, kelas) => {
  return { code, kelas };
};




const kelasBaru = (id) => {
  if (id === 1) {
    return getClass("SIJA", "Sistem Informasi Jaringan dan Aplikasi");
  } else if (id === 2) {
    return getClass("RPl", "Rekayasa Perangkat Lunak");
  } else if (id === 3) {
    return getClass("MM", "Multimedia");
  }
  return { id };
};

const getClassAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kelas = id === 1 ? "SIJA" : "RPL";
      resolve({id, kelas});
    }, 3000);
  });
};

const getClassAsyncs = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let kelas
      if(id===1){
        kelas = getClass("SIJA", "Sistem Informasi Jaringan dan Aplikasi")
      }else if(id === 2){
        kelas = getClass("RPl", "Rekayasa Perangkat Lunak");
      }else if(id ===2){
       kelas = getClass("MM", "Multimedia");
      }
      resolve({id,kelas});
    }, 2000);
  });
};



module.exports = { kelasBaru, getClassAsync, getClassAsyncs };
