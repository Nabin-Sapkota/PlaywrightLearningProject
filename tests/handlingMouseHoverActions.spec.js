import {test, expect} from '@playwright/test';

test('mouse hover', async({page})=>{


    await page.goto("https://www.aliveinjesus.info/");
    // Maximize the window by setting a large viewport size (e.g., 1920x1080)
    await page.setViewportSize({ width: 1920, height: 1080 });
    const ageLevel = page.locator("//div//nav//li[2]");
    await ageLevel.hover();


    await page.waitForTimeout(10000);

})