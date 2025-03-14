import {test, expect} from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { homePage } from '../pages/homePage';
import { cartPage } from '../pages/cartPage';


// test('test', async({page}) =>{
//     //without POM
//     await page.goto("https://www.demoblaze.com/index.html");
//     await page.locator("#login2").click();
//     await page.locator("#loginusername").fill('Nabin');
//     await page.locator("#loginpassword").fill('Test@123');
//     await page.locator("//button[normalize-space() = 'Log in']").click();
// });

test("With POM", async({page}) =>{
    // login 
    const login = new loginPage(page);
    await login.gotoLoginPage();
    await login.login("Nabin", "Test123");

    //Home 
    const homepage = new homePage(page);
    await homepage.selectProduct("Nexus");
    await homepage.gotoCart();

    // cart

    const cartCheck = new cartPage(page);
    await page.waitForTimeout(3000);
    const productInCart = await cartCheck.checkProductInCart("Nexus");
    expect(productInCart).toBe(true);

    await page.waitForTimeout(5000);

});



