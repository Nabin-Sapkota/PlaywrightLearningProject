exports.cartPage = 
class cartPage{
    constructor(page){
        this.page = page;
        this.allProducts = "//tr[@class ='success']//td[2]";
    }

    async checkProductInCart(productName){
        const productsInCart = await this.page.$$(this.allProducts);
        for(const product of productsInCart){
            console.log(product);
            const nameOfProduct = await product.textContent();
            console.log(nameOfProduct);
            if (nameOfProduct.includes(productName)){
                return true;
                break;
            }
            return false;
        }
    };
}