const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

module.exports = {
  src_folders: ['tests'],
  custom_commands_path: 'commands',
  custom_assertions_path: 'assertions',
  page_objects_path: 'pages',
  globals_path: 'globals.js',
  test_settings: {
    production: {
      webdriver: {
        server_path: chromedriver.path,
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
    staging: {
      webdriver: {
        server_path: chromedriver.path,
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
    productionGecko: {
      webdriver: {
        server_path: geckodriver.path,
        port: 4444,
        start_process: true,
        default_path_prefix: '',
        cli_args: [
          '--log',
          'debug',
        ],
      },
      browserName: 'firefox',
      javascriptEnabled: true,
      acceptSslCerts: true,
    },
  },
};
