module.exports = function override (config, env) {
  if (env === 'production') {
    config.output.publicPath = '/cra/';
  }
  return config;
};
