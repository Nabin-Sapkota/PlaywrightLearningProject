const {test, expect} = require('@playwright/test');

test('handling frames', async({page}) =>{

    await page.goto("https://ui.vision/demo/webtest/frames/");
    // total frames 
    const framesOnPage = await page.frames(); // this will return array of frames
    console.log("Number of frames : ", framesOnPage.length);


    // first we have to get the frame with the frame locator
     
    // approach1: using name or url
    //const frame1 = await page.frame('name');
    const frame1 = await page.frame("https://ui.vision/demo/webtest/frames/frame_2.html");
    
    await frame1.fill("name = 'mytext1', 'Hello'");

    await page.waitForTimeout(5000);
})