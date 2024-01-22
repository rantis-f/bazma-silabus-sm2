const {kelasBaru,getClassAsync,getClassAsyncs} = require('./arsitektur')

console.log(kelasBaru(1))
getClassAsync(1).then((kelasSija) => {
    console.log(kelasSija)
})
getClassAsync(2).then((kelasRpl) => {
    console.log(kelasRpl)
})

getClassAsyncs(1).then((kelasSija) => {
    console.log(kelasSija)
})
