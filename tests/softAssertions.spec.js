import {test, expect} from '@playwright/test';

test('softAssertions', async ({page})=>{

    await page.goto("https://www.demoblaze.com/index.html");

    // hard assertions
    await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
    await expect(page).soft.toHaveTitle("STOREe"); //this assertion has to fail
    await expect(page.locator(".navbar-brand")).toBeVisible();


})
