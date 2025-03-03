import {test, expect} from "@playwright/test";
/* 
Annotations:
// 
*/
let browserName;
test('test1', async({page, browserName}) => {
    console.log("this is test1");

    if (browserName ==='chromium'){
        test.skip();
    }
})

test('test2', async({page,browserName}) => {
    console.log("this is test2");
    if (browserName === 'firefox'){
        test.skip();
    }
});
test('test3', async({page, browserName}) => {
    console.log("this is test3");
    if (browserName === 'chromium'){
        test.skip()
    }
});

test('test4', async({page}) => {
    console.log("this is test4");
});
// fix me
test('test5', async({page}) => {
    console.log("this is test5");
    test.fixme();
});

//fail annotation.

test('test6', async({page})=>{

    test.fail();
    console.log("this is test6....");
    expect(1).toBe(3); //the requirement was to fail and the assertions is fail , so test is passed
});

test('test7', async({page, browserName}) => {
    if (browserName ==='chromium'){

        test.fail();//expected
    };
    
});

test('test8', async({page, browserName }) =>{
    test.slow(); // this will triple the timeout.
    console.log('this is test7');
    await page.goto('https://www.demoblaze.com/index.html');

})