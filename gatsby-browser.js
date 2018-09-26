exports.onClientEntry = function(_, pluginParams) {
  if (process.env.NODE_ENV === 'production') {
    require.ensure(['@sentry/browser'], function(require) {
      const Sentry = require('@sentry/browser');
      Sentry.init(pluginParams);
    });
  }
};
