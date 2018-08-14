const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const config = require('./global.conf');

module.exports = {
    'src_folders': [config.testsPath],
    'output_folder': './reports',
    'page_objects_path': config.helpersPath,
    'selenium': {
        'start_process': true, // tells nightwatch to start/stop the selenium process
        'server_path': seleniumServer.path,
        'host': config.host,
        'port': config.port, // standard selenium port
        'cli_args': {
            'webdriver.chrome.driver' : chromedriver.path
        }
    },
    'test_settings': {
        'default': {
            'screenshots': {
                'enabled': true,
                'path': '',
            },
        'launch_url' : config.dafaultUrl,
        'globals': {
            'waitForConditionTimeout': config.timeout
        },
        'desiredCapabilities': {
            'browserName': 'chrome',
            'chromeOptions': {
                // "args" : ["--headless"]
            }
        }
    },
    'chrome': {
      'desiredCapabilities': {
        'browserName': 'chrome',
        'javascriptEnabled': true // turn off to test progressive enhancement
      }
    }
  }
}
