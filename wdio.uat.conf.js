// merge with parent conf
// import merge lib
const merge = require('deepmerge');
const wdioConf = require('./wdio.conf');

// merge config files
exports.merge(wdioConf.config, {
  baseUrl: 'http://someurl.com',
  waitForTimeout: 5000,
  mochaOpts: {
    ui: 'bdd',
    timeout: 90000,
    grep:'someTag'
  },
});
