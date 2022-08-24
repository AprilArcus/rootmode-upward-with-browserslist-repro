module.exports = api => {
  api.cache.forever()
  return {
    babelrcRoots: ['packages/*']
  }
}
