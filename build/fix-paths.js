const fs = require('fs')
const path = require('path')

const buildOutput = path.join(__dirname, '..', 'dist', 'index.html')
const index = fs.readFileSync(buildOutput, 'utf8')
let fixedIndex = index.replace(/\/js/g, 'js')
fixedIndex = fixedIndex.replace(/\/css/g, 'css')

fs.writeFileSync(buildOutput, fixedIndex)
