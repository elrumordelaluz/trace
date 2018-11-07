const { promisify } = require('util')
const fs = require('fs')
const SVGO = require('svgo')
const clipboardy = require('clipboardy')
const trace = require('.')

const readFile = promisify(fs.readFile)
const svgo = new SVGO({
  plugins: [
    {
      removeAttrs: { attrs: 'opacity' },
    },
  ],
})

const init = async () => {
  const bytes = await readFile(__dirname + '/' + 'icon.jpg')
  const traced = await trace(bytes)
  const { data: optimized } = await svgo.optimize(traced)
  clipboardy.writeSync(optimized)
  console.log(optimized)
}

init()
