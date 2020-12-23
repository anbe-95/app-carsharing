module.exports = {
  // lintOnSave: false,
  transpileDependencies: [
    'vuetify',
  ],
  devServer: {
    proxy: 'http://api-factory.simbirsoft1.com',
  },
};
