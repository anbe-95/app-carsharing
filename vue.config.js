module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  devServer: {
    proxy: 'http://api-factory.simbirsoft1.com',
  },
};
