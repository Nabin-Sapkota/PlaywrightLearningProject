import {test, expect} from '@playwright/test';

test.beforeAll(async() =>{
    console.log("this is exectuted  before each");
});
test.afterEach(async() => {
    console.log("This is executed after each");
});

test.describe('Group 1', async() => {

    test('test1', async({page}) => {
        console.log("this is first test");
    
    })
    
    test('test2', async({page}) => {
        console.log("this is sample 2 test");
        
    })
})

test.describe('Group 2', async() => {

    test('test3', async({page}) => {
        console.log("this is sample 3 test");
        
    })
    
    test('test4', async({page}) => {
        console.log("this is sample 4 test");
        
    })
    
    
})