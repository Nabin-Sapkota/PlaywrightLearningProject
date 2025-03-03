import {test, expect} from "@playwright/test";

test("page screenshot", async({page}) => {

    await page.goto("https://demo.opencart.com/");
    await page.waitForTimeout(5000);
    await page.screenshot({path:'C:/Users/Dell/Desktop/Playwright Automation/screenshots' + Date.now() + 'screenshot homepage.png'});
});

test("full page screenshot", async({page}) => {

    await page.goto("https://demo.opencart.com/");
    await page.waitForTimeout(5000);
    await page.screenshot({path:'C:/Users/Dell/Desktop/Playwright Automation/screenshots' + Date.now() + 'screenshot fullpage.png', fullPage: true})});

test("element screenshot", async({page}) => { // provide the locaotor of the element as well.

    await page.goto("https://demo.opencart.com/");
    await page.locator('//*[@id="content"]/div[2]/div[1]').screenshot({path: `C:/Users/Dell/Desktop/Playwright Automation/screenshots/${Date.now()}_screenshot_element.png`
      });
});
