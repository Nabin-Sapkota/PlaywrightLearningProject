const {test, expect} = require("@playwright/test");

let page;

test.beforeEach(async ({browser}) => {
    // beforeEach hook can be used as well to execute login only once.
    page = await browser.newPage();
    await page.goto("https://www.demoblaze.com/index.html");

    //login
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("Nabin");
    await page.locator("#loginpassword").fill("Test123");
    await page.locator("//button[@onclick = 'logIn()']").click();
    await page.waitForTimeout(2000);
})

test("Homepage elements", async () => {
    const elementsOnPage = await page.$$('.card-block');
    expect(elementsOnPage).toHaveLength(9);
}
)

test("add to cart", async() =>{
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();
    
    page.on('dialog', async dialog => {
        expect(dialog.message).toContain('Product added.');
        await dialog.accept();
    })
})

test.afterEach(async() => {
    // alternatively afterAll hook can be used to exectute logout after completing test only once.
    await page.locator("#logout2").click();
})