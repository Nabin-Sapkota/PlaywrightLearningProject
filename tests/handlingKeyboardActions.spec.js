import {test, expect} from "@playwright/test"

test("Keyboard Actions", async({page}) => {

    const TextToFill = "Nabin Playwright";
    await page.goto("https://gotranscript.com/text-compare");
    await page.locator("//textarea[@placeholder='Paste one version of the text here.']").fill(TextToFill);// this will locate the input box and fill in the text.
    // await page.type("locator", "text") can also use this to fill

    // Now select these text by CTRL A, CTRL C  TAB and CTRL V

    await page.keyboard.press("Control+A"); // selects the text for multiple keys at once we use press
    await page.keyboard.press("Control+C"); // copies the text
    await page.keyboard.down("Tab");  // since tab is single key we use down to press once and again up to release it
    await page.keyboard.up("Tab"); // this will release pressed tab

    await page.keyboard.press("Control+V"); // this will paste the text on the input selected by the tab 

    const copiedText = await page.locator("//textarea[@placeholder='Paste another version of the text here.']").inputValue();
    expect(copiedText).toBe(TextToFill);

    await page.waitForTimeout(3000);


})