const { PNG } = require('pngjs')
const sharp = require('sharp')
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
  let image = await sharp(input)
  const pngImage = await image.png().toBuffer()
  const pngData = await pngParser(pngImage, parserOptions)

  return imagedataToSVG(pngData, traceOptions)
}
