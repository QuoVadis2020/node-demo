const homedir = require('os').homedir()
const home = process.env.HOME || homedir
const p = require('path')
const dbPath = p.join(home, '.todo')

module.exports.add = (title) => {
  console.dir(title)
  console.dir(home)
  fs.readFile(dbPath, {
    flat: 'a+'
  })
}
