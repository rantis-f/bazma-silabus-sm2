const getClass = (code) => {
  const kelas = code === 1 ? "SIJA" : "RPL";
  return {code, kelas}
};
console.log(getClass(1))
console.log(getClass(2))

const functionKelas = (kode, deskripsi, kelas) => {
    return { kode, deskripsi, kelas}
}

const getClassDescription = (kodeId) => {
    const kelas = kodeId === 1 ? functionKelas("SIJA","Sistem Informasi Jaringan dan Aplikasi",11)
    : functionKelas("RPL", "Rekayasa Perangkat Lunak", 12)
    return {kodeId, kelas}
}
console.log(getClassDescription(1))

