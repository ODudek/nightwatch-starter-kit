module.exports = {
    after: (browser) => {
        browser.end();
    },
    'Google title': (browser) => {
        const google = browser.page.google();
        google.navigate()
            .assert.title('Google')
            .assert.visible('@searchBar')
            .setValue('@searchBar', 'nightwatch')
            .submitForm('@form');
    }
}