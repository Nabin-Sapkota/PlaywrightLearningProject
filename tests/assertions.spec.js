const {test, expect} = require('@playwright/test');

test('assertions', async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register');

    //expect (page).toHaveURL()  check whether the page has the url

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    // check whether the page has a certain title or not
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    // check whether a certain element is visible or not
    const logoElement = page.locator("img[alt='nopCommerce demo store']");
    await expect(logoElement).toBeVisible();

    // check whether a element is enabled or not.

    const element1 = page.locator("#small-searchterms");
    await expect(element1).toBeEnabled();

    // check whether a element is disabled or not.

    // const element2 = page.locator("div[class='page-title'] h1");
    // await expect(element2).toBeDisabled();


    //check whether a checkbox  or radio box is checked or not 

    const checkBoxElement = page.locator("#Newsletter");
    await expect(checkBoxElement).toBeChecked();
    await expect(page.locator("#gender-male")).not.toBeChecked();
    await expect(page.locator("#gender-female")).not.toBeChecked();

    await page.locator("#gender-male").check();
    const recentlyCheckedElement = page.locator("#gender-male")
    await expect(recentlyCheckedElement).toBeChecked();
    const anotherUncheckedElement = page.locator("#gender-female")
    await expect(anotherUncheckedElement).not.toBeChecked();

    //check whether a element has a certain attributes

    const registerButton = page.locator("#register-button");
    await expect(registerButton).toHaveAttribute('type', 'submit');
    await expect(registerButton).toHaveAttribute("type");

    // check whether a element has a certain text or matches a certain text

    const elementWithText = page.locator("div[class='page-title'] h1");
    await expect(elementWithText).toHaveText("Register"); //complete text
    await expect(elementWithText).toContainText("gist"); // partial text

    //check if added input is recorded as it was provided

    const inputBox = page.locator("#Email");
    await inputBox.fill("nabin98452@gmail.com");
    await expect(inputBox).toHaveValue("nabin98452@gmail.com");

    //check the length of element displayed is correct or not

    const dropdownElements = page.locator("select[name='DateOfBirthMonth'] option");
    await expect(dropdownElements).toHaveCount(13);




})