const {test, expect} = require("@playwright/test");

test("single file upload", async({page}) => {
    
    await page.goto("https://practice.expandtesting.com/upload");
    await page.waitForSelector('#fileInput');
    await page.locator("#fileInput").setInputFiles('upload_files/Sample Doc File 1.pdf');

    await page.waitForTimeout(5000);
})

test("multiple file upload", async({page}) =>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.waitForSelector('#filesToUpload');
    await page.locator("#filesToUpload").setInputFiles(['upload_files/Sample Doc File 1.pdf', 'upload_files/Sample Doc file 2.pdf'], )

    expect( page.locator("#fileList li:nth-child(1)")).toHaveText('Sample Doc File 1.pdf');
    expect( page.locator("#fileList li:nth-child(2)")).toHaveText('Sample Doc file 2.pdf');


    // Removing files 

    await page.waitForSelector('#filesToUpload');
    await page.locator("#filesToUpload").setInputFiles([]);
    expect( page.locator("#fileList li:nth-child(1)")).toHaveText('No Files Selected');

    await page.waitForTimeout(5000);
})