const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const config = require('./global.conf');

module.exports = {
    'src_folders': config.testsPath,
    'output_folder': config.reportsPath,
    'page_objects_path': config.helpersPath,
    'selenium': {
        'start_process': true,
        'server_path': seleniumServer.path,
        'host': config.host,
        'port': config.port,
        'cli_args': {
            'webdriver.chrome.driver' : chromedriver.path,
        }
    },
    'test_settings': {
        'e2e': {
            'screenshots': {
                'enabled': true,
                'path': '',
            },
            'launch_url' : config.dafaultUrl,
            'globals': {
                'waitForConditionTimeout': config.timeout,
            },
            'desiredCapabilities': {
                'browserName': 'chrome',
                'chromeOptions': {
                    'args' : ['--headless'],
                }
            },
            'skip_testcases_on_fail': false,
            'exclude' : [
                config.unitTests,
                config.helpersPath
            ],

        },
        'unit': {
            'selenium': {
                'start_process': false,
                'start_session': false
            },
            'filter' : config.unitTests,
            'compatible_testcase_support' : true
          },
    }
};
