const {test, expect} = require('@playwright/test')

test('Hidden Options Dropdown', async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.getByRole("button","type = 'submit'").click();
    await page.locator("//a[@class = 'oxd-main-menu-item active']");

    // click on dropdown.
    await page.locator("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)")
    .click();





    await page.waitForTimeout(5000);

    
})