const config = require('./protractor.conf').config;

config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--headless', '--disable-gpu', '--no-sandbox', '--window-size=800x600']
  }
};

exports.config = config;
