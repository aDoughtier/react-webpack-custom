const path = require('path')
const cwd = process.cwd()
module.exports = {
  path,
  abResolve:(...rest) => path.resolve(cwd,...rest)
}