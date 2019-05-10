module.exports = function override(config, env) {
  if (env === 'production') {
    config.output.publicPath = '/no-ssr/';
  }
  return config;
};
