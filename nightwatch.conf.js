/* eslint import/no-dynamic-require: 0,  global-require: 0 */

require('babel-register');

function testConfigLocation() {
  const id = process.argv.findIndex((arg) => arg === '--cconfig');
  if (id > -1) {
    return id + 1;
  }
  return undefined;
}

const config = {
  src_folders: ['tests'],
  custom_commands_path: 'commands',
  custom_assertions_path: 'assertions',
  page_objects_path: 'pages',
  globals_path: 'globals.js',
  webdriver: {
    start_process: false,
    host: 'localhost',
    port: 4444,
  },
  test_settings: {
    live: {
      webdriver: {
        server_path: 'node_modules/.bin/chromedriver',
        port: 9515,
        start_process: true,
        default_path_prefix: '',
        cli_args: [
          '--verbose',
          '--whitelisted-ips 0.0.0.0/0',
        ],
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: [
            '--disable-dev-shm-usage',
            'disable-gpu',
            '--no-sandbox',
            '--window-size=1920,6000',
          ],
        },
      },
    },
    uat: {
      webdriver: {
        server_path: 'node_modules/.bin/chromedriver',
        port: 9515,
        start_process: true,
        default_path_prefix: '',
        cli_args: [
          '--verbose',
        ],
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: [
            '--disable-dev-shm-usage',
            'disable-gpu',
            '--no-sandbox',
            '--window-size=1920,6000',
          ],
        },
      },
    },
  },
};

if (testConfigLocation() !== undefined) {
  const conff = require(process.argv[testConfigLocation()]);
  module.exports = conff;
} else {
  module.exports = config;
}
