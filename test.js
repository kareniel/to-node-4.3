const test = require('tape')
const compile = require('.')

test('compiles a test folder', t => {
    compile('./test/src', './test/lib', err => {
        if (err) return t.fail(err)
        t.pass('compiled a test folder without error')
        t.end()
    })
})
