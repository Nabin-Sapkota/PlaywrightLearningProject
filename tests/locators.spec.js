

//const {test, expect} = require('@playwright/test');
import {test, expect } from '@playwright/test'

test('locators', async ({page}) => {

    await page.goto('https://www.demoblaze.com/index.html');
    await page.click("//a[@id='login2']");
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    
    // or await page.fill('#loginpassword', 'Password@123');
    // await page.locator('locator').click();
    await page.click("button[onclick='logIn()']");

    //Verify logout link presence
    const logoutLink = page.locator("//a[@id='logout2']");

    await expect(logoutLink).toBeVisible();

    await page.close();


})