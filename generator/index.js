module.exports = api => {

  api.extendPackage({
    dependencies: {
      'buefy': '^0.8.6',
      'vue-perfect-scrollbar': '^0.2.0',
      'vue-router': '^3.1.3',
      'vuex': '^3.1.1'
    }
  })

  api.render('./template');

  api.onCreateComplete(() => {

  });

}
