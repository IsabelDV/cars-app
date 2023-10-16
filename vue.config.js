module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@vue/compat', '@vue/compat')
      .set('@vue/composition-api', '@vue/composition-api');
  },
  transpileDependencies: ['@vue/compat', '@vue/composition-api'],
};
