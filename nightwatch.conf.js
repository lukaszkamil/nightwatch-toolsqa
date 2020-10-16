const chromedriver = require('chromedriver');

module.exports = {
  src_folders: ['tests'],
  custom_commands_path: 'commands',
  custom_assertions_path: 'assertions',
  page_objects_path: 'pages',
  globals_path: 'globals.js',
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
  test_settings: {
    production: {
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
