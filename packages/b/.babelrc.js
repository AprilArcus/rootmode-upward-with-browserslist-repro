module.exports = api => {
  api.cache.forever()
  return {
    presets: [
      require('@babel/preset-react')
    ]
  }
}
