import {test, expect} from '@playwright/test'

test('handlingRadioButtons', async({page})=>{

    await page.goto('https://practice.expandtesting.com/radio-buttons');
    await page.locator("//label[@for='blue']").check();
    await expect(await page.locator("//label[@for = 'red']").isChecked()).toBeFalsy();
    await expect(await page.locator("//label[@for = 'yellow']").isChecked()).toBeFalsy();
    await expect(await page.locator("//label[@for = 'black']").isChecked()).toBeFalsy();
    await expect(await page.locator("#green")).toBeDisabled();
    await expect(await page.locator("//label[@for='blue']").isChecked).toBeTruthy();






    await page.waitForTimeout(5000);


})