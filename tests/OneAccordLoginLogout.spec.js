import {test, expect} from '@playwright/test'

test('oneAccordLoginLogout', async({page}) =>{

    page.goto('https://admin.dev.oneaccord.cc/login');

    // locating elements on login form
    const emailField = page.locator("//input[@name='email']");
    const passwordField = page.locator("input[name='password']");
    const loginButton = page.locator("button[type='submit']");

    // check whether the field is visible or not
    await expect(emailField, passwordField, loginButton).toBeVisible();
    await expect(emailField, passwordField, loginButton).toBeEmpty();
    await expect(emailField,passwordField,loginButton).toBeEditable();
    await expect(emailField,passwordField,loginButton).toBeEnabled()
    
    const inputEmail = 'nabin98452@gmail.com'
    const inputPassword = 'Password@123'
    

    // filling in details and login to the account
    await emailField.fill(inputEmail);
    await passwordField.fill(inputPassword); // await page.fill("locator", 'input");
    await loginButton.click();

    // check whether the user is logged into correct page
    // await expect(page).toHaveTitle("OneAccord");
    // await expect(page).toHaveURL("https://admin.dev.oneaccord.cc/dashboard");

    // check whether the user is logged in as a correct user
    const userProfileButton = page.getByAltText("user display picture");
    await userProfileButton.waitFor({state: 'visible'});
    await userProfileButton.click({force : true});

    //Verify whether logged in as church admin or not
    const userRoleText = page.locator("//span[@class = 'text-b2 text-content-placeholder']");
    const userEmail = page.locator("//span[@class='text-b2 break-words text-content-placeholder']");
    await expect(userRoleText).toHaveText("Church Admin");
    await expect(userEmail).toHaveText(inputEmail);

    //Logout

    const logoutButton = page.locator("//div[@class = 'mx-2']//div");
    await logoutButton.click();
    await expect(page).toHaveURL("https://admin.dev.oneaccord.cc/login");
    await expect(page).toHaveTitle("Login | One Accord");







    







})