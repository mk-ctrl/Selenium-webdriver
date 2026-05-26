npm init -y
npm install selenium-webdriver
npm install mocha --save-dev

const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

describe('Amazon Test', function () {
    // Increase timeout to 30 seconds for the entire test suite to allow browser loading.
    // Note: Do not use arrow functions '() => {}' here, or 'this.timeout' won't work.
    this.timeout(30000); 

    let driver;

    before(async function () {
        // Initialize the Chrome driver
        driver = await new Builder()
            .forBrowser('chrome')
            .build();

        // Navigate to Amazon
        await driver.get('https://www.amazon.in');
    });

    it('Verify Amazon Title', async function () {
        // Fetch the page title
        let title = await driver.getTitle();
        
        console.log(`\n      -> The page title is: "${title}"\n`);

        // Assert that the title contains the word 'Amazon'
        assert.strictEqual(
            title.includes('Amazon'),
            true
        );
    });

    after(async function () {
        // Quit the browser and end the session
        if (driver) {
            await driver.quit();
        }
    });
});

npx mocha amazonTest.js

