// Angular-CLI server configuration
// Unrelated to environment.dev|prod.ts

/* jshint node: true */

module.exports = function(environment, APP_CONFIG) {
  return {
    environment: environment,
    APP_CONFIG: APP_CONFIG,
    baseURL: '/',
    locationType: 'auto'
  };
};

