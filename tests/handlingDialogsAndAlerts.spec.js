import {test, expect} from '@playwright/test'

test("handling Dialogs and alerts", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com");

    // first have to create a dialog handler and then only trigger the event
    // dialog window handler
    await page.on('dialog', async dialog =>{
        // this function is enabling alert handling
        //check dialog type
        await expect(dialog.type()).toContain('prompt')// checks if it alert type

        await expect(dialog.message()).toContain('Please enter your name:');
        await expect(dialog.defaultValue()).toContain('Harry Potter'); // validates the default value.
        await 
        await dialog.accept('Nabin');// pass the value before closing
    })
    await page.click("#promptBtn");
    await expect(page.locator("//p[@id='demo']")).toHaveText("Hello Nabin! How are you today?");

    // await page.on('dialog', async dialog =>{
    //     expect(dialog.type().toContain(''));

    // })






    await page.waitForTimeout(5000);
})