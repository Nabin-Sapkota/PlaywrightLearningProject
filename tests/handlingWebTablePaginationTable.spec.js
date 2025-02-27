import {test, expect} from '@playwright/test'
import { text } from 'stream/consumers';

test("handle webtable pagination table", async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const table = await page.locator("#productTable");

    // total number of rows and column
    const columns = await table.locator('thead tr th');
    // console.log("Number of columns : ", await columns.count());
    // expect (await columns.count()).toBe(4);

    const rows = await table.locator('tbody tr');
    // console.log("Number of rows : ", await rows.count())
    // expect (await rows.count()).toBe(5);

    // // select particular product from the table 
    // const matchedRow = rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Smartwatch'
    // }); await matchedRow.locator('input').check();

    // 3. Select Multiple products by re usable functions 
    await selectProduct(rows, page, 'Smartwatch');
    await selectProduct(rows, page, 'Laptop');
    await selectProduct(rows, page, 'Tablet');

    async function selectProduct(rows, page, name){
        const matchedRow = rows.filter({
                has: page.locator('td'),
                hasText: name
            });
        await matchedRow.locator('input').check();
    }



   





    await page.waitForTimeout(5000);


})