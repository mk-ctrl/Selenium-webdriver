npm init -y
npm install selenium-webdriver
npm install chromedriver

const { Builder, By, until } = require('selenium-webdriver'); // Fixed 'const' and added 'until'

async function test() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Open Amazon
        await driver.get('https://www.amazon.in');

        // Wait up to 10 seconds for the Sign In button to load, then click
        let signInButton = await driver.wait(until.elementLocated(By.id('nav-link-accountList')), 10000);
        await signInButton.click();

        // Wait up to 10 seconds for the Email field to load, then type
        let emailInput = await driver.wait(until.elementLocated(By.id('ap_email')), 10000);
        await emailInput.sendKeys('test@gmail.com');

        // Wait up to 10 seconds for the Continue button to load, then click
        let continueButton = await driver.wait(until.elementLocated(By.id('continue')), 10000);
        await continueButton.click();

        console.log("Test Executed Successfully");

    } catch (error) {
        console.error("Test Failed with error: ", error);
    } finally {
        // Close Browser regardless of success or failure
        await driver.quit();
    }
}

test();
