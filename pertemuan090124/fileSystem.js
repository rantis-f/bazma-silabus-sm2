const fs = require('fs')
console.log(fs)

const perkenalan = fs.readFileSync('perkenalan.txt')
console.log(perkenalan.toString())
