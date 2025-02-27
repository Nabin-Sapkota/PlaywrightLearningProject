import {test, expect} from '@playwright/test'


test("dblClick", async({page})=>{

    page.goto("URL");
    await page.setViewportSize({width:1400, height:720});
    const elementToDoubleClick = page.locator(" locator of element to double click");
    await elementToDoubleClick.dblclick();

    await page.waitForTimeout(3000);


})