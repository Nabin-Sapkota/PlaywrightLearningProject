const {test, expect} = require('@playwright/test');

test('builtInLocators', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    //page.getByAltText() to locate an element usually image, by its text alternative

    const logo =  await page.getByAltText("company-branding");

    await expect(logo).toBeVisible();

    // page.getByPlaceholder() to locate an input element by placeholder
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");

    // page.getByRold() to locate by explici tan dimplicit accessibility attributes.

    await page.getByRole('button', {type : 'submit'}).click();
    const name = await page.locator(".oxd-userdropdown-tab").textContent();

    await expect (await page.getByText(name)).toBeVisible;

    // page.getByLabel() can be used to locate elements by a label.
    // await page.getByLabel('password').fill("") go to dev tools and search for labels.

    // page.getByTitle
    // await page.getByTitle("new page").click();

    // page.getByTestId to locate an element based on its data- testid attribute other attributes can be configured
    




})