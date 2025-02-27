const {test, expect} = require('@playwright/test')

test('forgotPassword', async({page}) => {

    await page.goto("https://admin.dev.oneaccord.cc/login");
    
    const forgotPasswordIcon = await page.locator("//a[@href='/forgot-password']//p");
    await forgotPasswordIcon.click();

    // check whether the system redirected user to correct page or not
    await expect(page).toHaveURL("https://admin.dev.oneaccord.cc/forgot-password");
    

    const emailField = page.locator("//input[@name = 'email']");
    const sendMeLinkButton = page.getByRole('button', "type = submit");

    await expect(emailField).toBeEmpty();
    await expect(emailField).toBeEnabled();
    await expect(emailField).toBeEditable();
    await expect.soft(sendMeLinkButton).toBeEnabled();
    
    const forgottenEmailPassword = "nabin98452@gmail.com";
    await emailField.fill(forgottenEmailPassword);
    await sendMeLinkButton.click();
    await expect(emailField).toBeEmpty();

    await page.waitForTimeout(5000); //pausing code













})
