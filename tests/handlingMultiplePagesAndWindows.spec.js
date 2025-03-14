const {test, expect, chromium} = require("@playwright/test");

test("Handle Pages/Windows", async() =>{
    const browser = await chromium.launch() //browser contains context
    const context = await browser.newContext() // context contains multiple pages

    const page1 =  await context.newPage()
    const page2 = await context.newPage()

   const allPages =  context.pages()
   console.log("Number of pages created : ", allPages.length)

   await page1.goto("https://playwright.dev/docs/intro")
   console.log(await page1.title())
   await expect(page1).toHaveTitle("Installation | Playwright")

   await page2.goto("https://playwright.dev/community/welcome")
   console.log(await page2.title())
   await expect(page2).toHaveTitle("Welcome | Playwright")

   await page1.waitForTimeout(300)
    
})

test.only("Handle multiple Pages/Windows", async() =>{
    const browser = await chromium.launch() //browser contains context
    const context = await browser.newContext() // context contains multiple pages

    const page1 =  await context.newPage()
    const page2 = await context.newPage()

   const allPages =  context.pages()
   console.log("Number of pages created : ", allPages.length)

   await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   console.log(await page1.title())
   await expect(page1).toHaveTitle("OrangeHRM")

   const pagePromise = context.waitForEvent('page')
   await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()
   
   const newPage = await pagePromise;

   await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM")

   await page1.waitForTimeout(300)
   await newPage.waitForTimeout(300)
   await browser.close()
})