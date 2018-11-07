const { PNG } = require('pngjs')
const { imagedataToSVG } = require('imagetracerjs')

const pngParser = (bytes, options = {}) => {
  const png = new PNG(options)
  return new Promise((resolve, reject) => {
    png.parse(bytes, (error, data) => {
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
  })
}

module.exports = async (
  input,
  parserOptions,
  traceOptions = {
    viewbox: true,
    strokewidth: 0,
  }
) => {
  const png = await pngParser(input, parserOptions)
  const svgstring = imagedataToSVG(png, traceOptions)
  return svgstring
}
