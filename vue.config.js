// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#f96b54',
          'link-color': '#f96b54',
          // 'border-radius-base': '2px',
        },
        javascriptEnabled: true,
      },
    },
  },
};
