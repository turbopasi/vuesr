
// Meta JS File that will be picked up by the Vue CLI

module.exports = {

  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Enter Project Name',
      default: 'vuesr-clone'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Enter Description',
      default: 'A Vuesr Template Project'
    },
    author: {
      type: 'string',
      message: 'Author'
    }
  },

  completeMessage: 'Setup Complete'

};
