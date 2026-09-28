{// 1️⃣ Array Destructuring 📦

// Example 1
{const fruits = ["Apple", "Banana", "Orange"];

const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);}


// 💡 Example 2 — Skip a Value
// What if we only want the first and third values?
const fruits = ["Apple", "Banana", "Orange"];

const [firstFruit, , thirdFruit] = fruits;

console.log(firstFruit);
console.log(thirdFruit);


// 💡 Example 3 — Real World 👤
// Imagine a user has some information:
const user = ["Ahmed", 25, "Developer"];

const [name, age, job] = user;

console.log(name);
console.log(age);
console.log(job);


// 🛠️ Practice
const colors = ["Red", "Green", "Blue"];

const [firstColor, secondColor, thirdColor] = colors

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);};


{// 2️⃣ Object Destructuring 🧩

// 🌍 Real-World Example
// Imagine product data:
const product = {
    name: "Laptop",
    price: 800,
    category: "Electronics"
};

// Extract product information
{const { name, price, category } = product;

console.log(name);
console.log(price);
console.log(category);}


// 🛠️ Practice
// Create this object:
const student = {
    name: "Mohamed",
    age: 22,
    course: "JavaScript"
};

const { name, age, course} = student;

console.log(name);
console.log(age);
console.log(course);

// 🧩 Object Destructuring with Renaming
{    const student = {
    name: "Mohamed",
    age: 22
};

const { name: studentName, age: studentAge } = student;

console.log(studentName);
console.log(studentAge);}

// 🔥 Another Example
{const product = {
    name: "Laptop",
    price: 800
};

const {
    name: productName,
    price: productPrice
} = product;

console.log(productName);
console.log(productPrice);}


// 🛠️ Practice
// Try this:
const employee = {
    name: "Ali",
    salary: 1200,
    position: "Developer"
};

const{
    name: employeeName,
    salary: employeeSalary,
    position: employeePosition
}= employee

console.log(employeeName);
console.log(employeeSalary);
console.log(employeePosition);}


{// 3️⃣ Destructuring with Default Values ⚙️
const user = {
    name: "Mohamed"
};

const {
    name,
    age = 25
} = user;

console.log(name);
console.log(age);

// 🟡 Renaming + Default Value
// You can combine both concepts. 🔥
const employee = {
    name: "Ali"
};

const {
    name: employeeName,
    salary: employeeSalary = 1000
} = employee;

console.log(employeeName);
console.log(employeeSalary);

// 🛠️ Practice
// Try this:
const product = {
    name: "Laptop",
    price: 800
};
const {
    name:productName,
    price:productPrice,
    category:productCataegory = "Electronics"
}=product

console.log(productName);
console.log(productPrice);
console.log(productCataegory);}