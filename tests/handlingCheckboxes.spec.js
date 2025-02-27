import {test, page} from '@playwright/test'

test('handlingCheckboxes', async({page}) => {

    await page.goto("https://itera-qa.azurewebsites.net/home/automation");

    // single checkbox check or uncheck
   //  await page.locator("captured locator").check();// this will check the particular checkbox
    // await page.check("captured locator")
    
    // check whether the checked element is actually checked
    // await expect(page.locator("locator")).toBeChecked();
    // or await expect(page.locator("locator").isChecked()).toBeTruthly();

    // multiple checkboxes 
    // apply multiple check()operation
    // create array of the checkboxes
    // const checkboxes = [ "locator1", "locator2", "locator3"];

    // for boxes in checkboxes{      await page.locator(boxes).check();};

    // unselecting  
    // for boxes in checkboxes{if(await page.locator(boxes).isChecked()){
    //                       await page.locator(boxes).uncheck(); }
    //     }else{ await page.locator(boxes).check()};

})