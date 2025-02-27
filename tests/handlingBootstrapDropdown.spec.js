const{test, expect} = require('@playwright/test')

test('bootstrapDropdown', async({page}) => {
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');
    // locate dropdown button 
    //const dropdownButton = page.locator("//div[@class ='btn-group open'] //button");
    const dropdownButton = page.locator("//button[@data-toggle ='dropdown']");
    await dropdownButton.click();
    // count total number of options in dropdown

    const dropdownOptions = await page.locator("//ul//li//label[@class ='checkbox']").allTextContents();
    for(const options in dropdownOptions){
        console.log(options);
    }





    await page.waitForTimeout(5000);
})