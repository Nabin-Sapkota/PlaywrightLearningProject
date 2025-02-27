// demoblaze.com/index.html

const {test, expect} = require('@playwright/test')

test('Homepage',async ({page}) => {

    await page.goto('https://www.demoblaze.com/index.html');

    const pageTitle = await page.title();
    const pageURL = await page.url();

    console.log('Page title is : ', pageTitle);
    console.log('Page URL is : ', pageURL);

    await expect (page).toHaveTitle('STORE');
    await expect (page).toHaveURL('https://www.demoblaze.com/index.html')
    
    
    await page.close();




})