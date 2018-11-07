# trace

## Usage

```js
const trace = require('.')
const bytes = await readFile(__dirname + '/' + 'icon.png')
const traced = await trace(bytes)
console.log(await svgo.optimize(traced))
```

## API

```js
trace(input[, parserOptions, traceOptions])
```

- **`input`**

  Type: `Buffer`

- **`parserOptions`**

  Options from [pngjs](https://github.com/lukeapage/pngjs#options)

- **`traceOptions`**

  Options from [imagetracejs](https://github.com/jankovicsandras/imagetracerjs/blob/master/options.md)
