import {test, expect} from '@playwright/test';


test("Homepage", async ({page}) => {

    await page.goto("https://www.demoblaze.com/index.html");

    //login
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("Nabin");
    await page.locator("#loginpassword").fill("Test123");
    await page.locator("//button[@onclick = 'logIn()']").click();

    //Homepage

    const elementsOnPage = await page.$$('.card-block');
    expect(elementsOnPage).toHaveLength(9);

    //logout

    await page.locator("#logout2").click();

}
)

test("Add to Cart", async ({page}) => {

    await page.goto("https://www.demoblaze.com/index.html");

    //login
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("Nabin");
    await page.locator("#loginpassword").fill("Test123");
    await page.locator("//button[@onclick = 'logIn()']").click();

    // add product to cart

    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();
    
    page.on('dialog', async dialog => {
        expect(dialog.message).toContain('Product added.');
        await dialog.accept();
    })

    //logout

    await page.locator('#logout2').click();


})
