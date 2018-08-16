const assert = require('assert');

module.exports = {
    '@unitTest' : true,
    'demo UnitTest': (done) => {
        assert.equal('TEST', 'TEST');
        done();
    },
};
