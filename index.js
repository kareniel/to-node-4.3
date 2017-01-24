const babel = require('babel-core')
const exec = require('npm-run').exec

module.exports = compile

function compile (sourcePath, destPath, cb) {
  exec(`babel ${sourcePath} --out-dir ${destPath} --presets=latest`, {}, err => {
    if (err) return cb(err)
    cb(null)
  })
}