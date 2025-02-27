import {test, expect} from '@playwright/test';

test ('LocateMultipleElements', async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');
    // const links = await page.$$('a');
    // for(const link of links){
    //     const linkText = await link.textContent();
    //     console.log(linkText);
    // }
    await page.click("//div[@id='contcont']//a[2]");

   await page.waitForSelector("//div[@id='tbodyid']//div//h4//a");
    const products = await page.$$("//div[@id='tbodyid']//div//h4//a");
    console.log(products);
    for (const product of products){
        const productName = await product.textContent();
        console.log(productName);
    }
})
