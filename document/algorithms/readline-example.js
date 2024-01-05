import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

const rl = readline.createInterface({ input, output })

const input = []
rl.on('line', (input) => {
  console.log(`Received: ${input}`)
  input.push(input)
}).on('close', () => {
  console.log('Input', input)
  process.exit(0)
})
