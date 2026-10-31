import { getProductName } from "./product.js";
const productName = getProductName();
console.log(productName);


// script.js
import { productName2 } from "./product.js";
console.log(productName2);


// script.js
import product from "./product.js";
console.log(product);


// classes
class phone {
    constructor(){
        console.log("A product was created!")
    }

}

const myPhone = new phone
const myPhone1 = new phone


// Example 2
class product2 {
    constructor(name){
        this.name = name
    }

}

const laptop = new product2 ("laptop");

console.log(laptop.name)

// example 3
class product3{
    constructor(name){
        this.name = name;
    }

}

const mouse = new product3 ("mouse");
const keyboard = new product3 ("keyboard");

console.log(mouse.name);
console.log(keyboard.name);

// Example 4
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const laptop2 = new Product("Laptop", 900);
const phone1 = new Product("Phone", 500);

console.log(laptop2.name);  // Laptop
console.log(laptop2.price); // 900

console.log(phone1.price);
console.log(phone1.name);

//Example 5
class Product4 {
  constructor(name) {
    this.name = name; // Store the name in the object
  }

  showName() {
    console.log(this.name); // Read this object's name
  }
}

const productOne = new Product4("Laptopeeee");
const productTwo = new Product4("pen");

productOne.showName(); // Laptop
productTwo.showName(); // Phone

// Example 5 
class Product5 {
  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log(this.name);
  }
}

const product6 = new Product5 ("Keyboard");

product6.showName();


// Example 6
class Product7 {
  constructor(name) {
    this.name = name;
  }

  changeName() {
    this.name = "Mouse";
  }
}

const product8 = new Product7("Keyboard");

product8.changeName();

console.log(product8.name); // Mouse



// Getter
const products = {
  name: "caano",

  get productName() {
    return this.name;
  }
};

console.log(products.productName);

// setters
const ipad = {
  brand: "Samsung",

  set changeBrand(newBrand) {
    this.brand = newBrand;
  }
};

ipad.changeBrand = "iPhone";

console.log(ipad.brand);

// Static Method
class Product9 {
  // A static method belongs to the class
  static showCategory() {
    return "Electronics";
  }
}

// Call the method using the class name
console.log(Product9.showCategory());

// Output: Electronics

// Example
class Produc {
  // Static method: calculates a discount
  static calculateDiscount(price, discountPercent) {
    // Calculate the discount amount
    const discount = price * (discountPercent / 100);

    // Return the final price
    return price - discount;
  }
}

// Calculate a 10% discount on a $100 product
console.log("Total: $ " + Produc.calculateDiscount(100, 10));

// Output: 90


// Example
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(5, 3));

// Example
class Productee{
  static calculateDiscount(price, percent) {
    return price - (price * percent / 100);
  }
}

console.log(Productee.calculateDiscount(200, 10));
// 180

// calculate
class Productoo {
  static calculateTax(price, taxPercent) {
    return price * taxPercent / 100;
  }
}

console.log(Productoo.calculateTax(200, 5));


// Example
class Producte {
  static calculateTax(price, taxPercent) {
    return price * taxPercent / 100;
  }

  static calculateFinalPrice(price, taxPercent) {
    const tax = Producte.calculateTax(price, taxPercent);
    return price + tax;
  }
}

console.log(Producte.calculateFinalPrice(100, 10));

// example
class Product0 {
  static getPrice() {
    return 50;
  }

  static addShipping() {
    return Product0.getPrice() + 5;
  }
}

console.log(Product0.addShipping());


// 4. Review challenge — Getters and setters together
{
  class Product {
  constructor(price) {
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    if (newPrice >= 0) {
      this._price = newPrice;
    }
  }

  static addShipping(price) {
    return price + 5;
  }
}

const phone = new Product(60);

phone.price = 80;

console.log(Product.addShipping(phone.price));
}
