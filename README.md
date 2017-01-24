# to Node 4.3

Transpile a given source folder to Node.js 4.3 runtime compatible module.
This is useful for uploading code written in es6 to AWS Lambda.

```js
const compile = require('to-node-4.3')

compile('./src', './lib', err => {
    if (err) return console.error(err)
    // done!
})
```