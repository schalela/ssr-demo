const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  assetPrefix: false ? 'ssr' : '',
  target: 'server'
};
