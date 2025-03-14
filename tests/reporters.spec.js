import { defineConfig } from "playwright/test";

export default defineConfig({
    reporter: 'dot' // this could be anything list, line(only passed or failed) 
});
import {test} from "@playwright/test"

test('oneAccordLoginLogout', async({page}) =>{
   
    await page.goto('https://admin.dev.oneaccord.cc/login');

    // locating elements on login form
    const emailField = page.locator("//input[@name='email']");
    const passwordField = page.locator("input[name='password']");
    const loginButton = page.locator("button[type='submit']");

    const inputEmail = 'nabin98452@gmail.com'
    const inputPassword = 'Password@123'
    await emailField.fill(inputEmail);
    await passwordField.fill(inputPassword); // await page.fill("locator", 'input");
    await loginButton.click();

})