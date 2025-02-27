const {test, expect} = require("@playwright/test");
const { waitForDebugger } = require("inspector");

test('handling datepicker', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    // await page.fill("#datepicker", "06/12/2025");

    // picking date from calendar

    const year = "2022";
    const month = "March";
    const date = "28";
    await page.click("#datepicker"); // will open the calendar
    let dateFound = false;
    while (!dateFound){  // can also use while (true) and use break condition after the 
        const currentYear = await page.locator(".ui-datepicker-year").textContent() ;
        const currentMonth = await page.locator(".ui-datepicker-month").textContent() ;

        if (currentYear === year && currentMonth === month){
            dateFound = true;  
            const dateLocator = await page.locator(`//a[@class = 'ui-state-default'][text()= '${date}']`)
            await dateLocator.waitFor({state: "visible"});
            await dateLocator.click();
            break;
        }else if(year <= currentYear && currentMonth != month){
            page.click("//a[@data-handler ='prev']") // click button which displays previous month

        }else{
            page.click("//a[@data-handler ='next']")// click button which displays next month // in most cases this statement is not required
        }

    }
    

    // select dates using arrays concept.
    // inspect all dates and store it in array.
    // const datesFromCalendar = await page.$$("//a[@class ='.ui-state-default']");
    
    // for (const d of datesFromCalendar){
    //     if(await d.textContent() == date){
    //         await d.click();
    //         break;
    //     }

    // }
    await page.waitForTimeout(5000);


})