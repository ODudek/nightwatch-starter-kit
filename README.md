# Nightwatch starter kit

Simple starter for nightwatch.js with e2e and unit tests

## How to use

```
$ npm install                   # To install dependencies
$ npm run test:e2e              # To run e2e tests
$ npm run test:unit             # To run unit tests
$ npm run test:all              # To run e2e and unit tests
```

## Config

```
module.exports = {
    host: '127.0.0.1',                      # Host for selenium server
    port: 4444,                             # Port for selenium server
    timeout: 5000,                          # Request timeout
    testsPath: ['test/e2e', 'test/unit'],   # Path to tests folder
    helpersPath: 'test/helpers/e2e',        # Path to helpers folder
    reportsPath: 'reports',                 # Path to reports folder
    unitTests: 'test/unit/*',               # Path to unit tests
};
```
