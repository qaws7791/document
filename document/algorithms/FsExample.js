import fs from 'fs'
const input = fs.readFileSync('test.txt', 'utf8').toString().split('\r\n')

console.log(input)
