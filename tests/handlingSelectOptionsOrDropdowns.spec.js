import {test, expect} from '@playwright/test'
import exp from 'constants';

test('handlingDropdowns', async({page}) => {

    await page.goto('https://practice.expandtesting.com/dropdown');

    // ways to select options from dropdown

    // locate the dropdown

    const dropdownElement = page.locator("#country");
    // select element from dropdown

   // if label is tagname :  await dropdownElement.selectOption({label: "labelvalue"})
   //await dropdownElement.selectOption("Angola");

   // we can also select from value attributes
   //await dropdownElement.selectOption({value: "AS"});

   // we can also select providing index value 
//   await dropdownElement.selectOption({index: 7});

    // select by directly calling selectoption
    await page.selectOption("#country", 'Argentina'); // selected by using the id of the dropdown and text inside it

// Assertions
    // Check the total number of dropdown elements
    // capture all options into variable 

    // const dropdownElements = page.locator("//select[@id='country']//option"); // this will store all the elements on the dropdown
    // const numberOfDropdownElements = await dropdownElements.count();  // counts the number of elements on dropdown
    // await expect(dropdownElements).toHaveCount(numberOfDropdownElements);
    // console.log(numberOfDropdownElements);

    // print all options 
    // const dropdownElements = await page.$$("//select[@id='country']//option");
    // for (const el of dropdownElements){
    //     console.log(el.textContent());
    // }

    // check presence of a value in the dropdown 

    const dropdownElements = await page.locator("//select[@id='country']//option").allTextContents(); // find all elements 
    // await expect(dropdownElements.includes("Nepal")).toBeTruthy(); //checks whether the specified element is in the dropdown.

    // check presence of a value in the dropdown using looping 
    let foundstatus = false;
    for (const countries of dropdownElements){
        console.log(countries);
        if( countries == "Nepal"){
            foundstatus = true;
        }
    }
    // we can also use if (dropdownElemets.includes('Nepal')){ foundStatus = true;}
    await expect(foundstatus).toBeTruthy();

    



   await page.waitForTimeout(5000);


})