module.exports = api => {

  api.extendPackage({
    dependencies: {
      'buefy': '^0.8.6',
      'vue-perfect-scrollbar': '^0.2.0'
    }
  })

  api.render('./template')
  
}
