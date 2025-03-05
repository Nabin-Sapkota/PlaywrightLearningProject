const { Console } = require("console");

exports.homePage = 
class homePage{
    constructor(page){
        this.page = page;
        this.productList  = ".card-title a";
        this.addToCartButton = "//a[normalize-space()='Add to cart']";
        this.cart = "#cartur";
    }


    async selectProduct(productName){
        const products = await this.page.$$(this.productList);
        for (const product of products ) {
            const productNameOnApplication = await product.textContent();
            if (productNameOnApplication.includes(productName)){
                console.log(productNameOnApplication);
                await this.page.locator(`a:has-text("${productNameOnApplication}")`).click();
               // await product.click();
                break;

            };
        };
        await this.page.locator(this.addToCartButton).click();
        await this.page.on("dialog", async dialog =>{ 
           // await expect(dialog.message().includes("added"));
           if(dialog.message().includes("added")){
            await dialog.accept();
           };
            
        } );
        

    };
    async gotoCart(){
        await this.page.locator(this.cart).click();
    }

};