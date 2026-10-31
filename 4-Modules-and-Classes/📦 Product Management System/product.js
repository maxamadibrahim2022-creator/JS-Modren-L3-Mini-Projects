export default class product {
    // Step 1: Create a product with a name and price
    constructor(name,price){
        this.name = name;
        this._price = price;

    }

    // Step 2: Read the product price
    get price() {
        return this._price;
    }

    // Step 3: Update the price only if it is valid
    set price(newPrice){
        if(newPrice >= 0){
            this._price = newPrice;
            return
        }else{
            console.log("Price cannot be negative!");
        }
    }

    // Step 4: Display product information
    showInfo(){
        return `${this.name}: $${this.price}`
    }

    // Step 5: Calculate a discounted price
    static calculateDiscount (price, percent){
        return price - (price * percent / 100)

    }

}