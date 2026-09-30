
  {// 1️⃣ Array Destructuring 📦

  // Example 1
  {
    const fruits = ["Apple", "Banana", "Orange"];

    const [firstFruit, secondFruit, thirdFruit] = fruits;

    console.log(firstFruit);
    console.log(secondFruit);
    console.log(thirdFruit);
  }

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

  const [firstColor, secondColor, thirdColor] = colors;

  console.log(firstColor);
  console.log(secondColor);
  console.log(thirdColor);
}

{  // 2️⃣ Object Destructuring 🧩

  // 🌍 Real-World Example
  // Imagine product data:
  const product = {
    name: "Laptop",
    price: 800,
    category: "Electronics",
  };

  // Extract product information
  {
    const { name, price, category } = product;

    console.log(name);
    console.log(price);
    console.log(category);
  }

  // 🛠️ Practice
  // Create this object:
  const student = {
    name: "Mohamed",
    age: 22,
    course: "JavaScript",
  };

  const { name, age, course } = student;

  console.log(name);
  console.log(age);
  console.log(course);}

{  // 🧩 Object Destructuring with Renaming
  
    const student = {
      name: "Mohamed",
      age: 22,
    };

    const { name: studentName, age: studentAge } = student;

    console.log(studentName);
    console.log(studentAge);
  

  // 🔥 Another Example
  
    const product = {
      name: "Laptop",
      price: 800,
    };

    const { name: productName, price: productPrice } = product;

    console.log(productName);
    console.log(productPrice);
  

  // 🛠️ Practice
  // Try this:
  const employee = {
    name: "Ali",
    salary: 1200,
    position: "Developer",
  };

  const {
    name: employeeName,
    salary: employeeSalary,
    position: employeePosition,
  } = employee;

  console.log(employeeName);
  console.log(employeeSalary);
  console.log(employeePosition);}

{  // 3️⃣ Destructuring with Default Values ⚙️`
  const user = {
    name: "Mohamed",
  };

  const { name, age = 25 } = user;

  console.log(name);
  console.log(age);

  // 🟡 Renaming + Default Value
  // You can combine both concepts. 🔥
  const employee = {
    name: "Ali",
  };

  const { name: employeeName, salary: employeeSalary = 1000 } = employee;

  console.log(employeeName);
  console.log(employeeSalary);

  // 🛠️ Practice
  // Try this:
  const product = {
    name: "Laptop",
    price: 800,
  };
  const {
    name: productName,
    price: productPrice,
    category: productCataegory = "Electronics",
  } = product;

  console.log(productName);
  console.log(productPrice);
  console.log(productCataegory);

  {
    // 1️⃣ Normal
    const { name } = product;

    // 2️⃣ Default
    const { category = "Electronics" } = product;

    // 3️⃣ Rename
    const { name: productName } = product;

    // 4️⃣ Rename + Default
    const { category: productCategory = "Electronics" } = product;
  }
}

 { // 🧪 Your practice
  // Create this object:

  const student = {
    name: "Ali",
    age: 20,
    course: "JavaScript",
  };

  function showStudent({ name, age, course }) {
    console.log(`name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`course: ${course}`);
  }

  showStudent(student);}

 { // 🧩 Destructuring Nested Objects
  // Now we go one level deeper.

  // 🟢 Beginner — What is a nested object?
  // Example:
  const student = {
    name: "Ali",
    age: 20,

    // This is an object inside the student object
    address: {
      city: "Mogadishu",
      country: "Somalia",
    },
  };
  console.log(student.address.city);
  console.log(student.address.country);

  // 🟡 Intermediate — Destructure the nested object
  const {
    name,
    address: { city, country },
  } = student;

  console.log(name);
  console.log(city);
  console.log(country);

  // Read it like:
  // From student, take address, and from address, take city and country.

  // 🔴 Advanced — Nested destructuring in function parameters
  // You can combine this with the topic we just learned. 🚀
  {
    const student = {
      name: "Ali",
      age: 20,

      address: {
        city: "Mogadishu",
        country: "Somalia",
      },
    };

    function showStudent1({ name, address: { city, country } }) {
      // Use the destructured values directly
      console.log(`Name: ${name}`);
      console.log(`City: ${city}`);
      console.log(`Country: ${country}`);
    }

    showStudent1(student);}}
  
 { // 🧪 Practice
  // Create this object:
  const product = {
    name: "Laptop",
    price: 800,

    details: {
      brand: "Dell",
      color: "Black",
    },
  };

  function showProduct({ name, price, details: { brand, color } }) {
    console.log(`Name: ${name}`);
    console.log(`price: ${price}`);
    console.log(`brand: ${brand}`);
    console.log(`Color: ${color}`);
  }
  showProduct(product);

  // product
  // ├── name   → "Laptop"
  // ├── price  → 800
  // └── details
  //     ├── brand → "Dell"
  //     └── color → "Black"
}

 { // 🚀 Destructuring Arrays Inside Objects
  // Imagine an API gives you product information:
  const product = {
    name: "Laptop",

    details: {
      brand: "Dell",
      colors: ["Black", "Silver", "Blue"],
    },
  };

  const {
    name,
    details: {
      brand,
      colors: [firstColor, secondColor, thirdColor],
    },
  } = product;

  console.log(`Product: ${name}`);
  console.log(`Brand: ${brand}`);
  console.log(`First color: ${firstColor}`);
  console.log(`Second color: ${secondColor}`);
  console.log(`Third color: ${thirdColor}`);}

{// 🧪 Practice
// Create this object:
const employee = {
  name: "Ahmed",

  department: {
    name: "Development",
    skills: ["JavaScript", "React", "Node.js"]
  }
};

function showEmployee({name,department:{name:departmentName,skills:[firstSkill,secondSkill,thirdSkill]}}){
    console.log(`Employee: ${name}`);
    console.log(`department: ${departmentName}`);
    console.log(`Skill 1: ${firstSkill}`);
    console.log(`Skill 2: ${secondSkill}`);
    console.log(`Skill 3: ${thirdSkill}`);

}
showEmployee(employee);}


{// 🧪 Practice
// Use this:
const student = {
  name: "Ali",

  courses: [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Node.js"
  ]
};

function showStudent({name,courses:[firstCourse,secondCourse,...otherCourse]}){
    console.log(`Name: ${name}`);
    console.log(`First Course: ${firstCourse}`);
    console.log(`Second Course: ${secondCourse}`);
    console.log(`Other Courses: ${otherCourse}`);
}
showStudent(student)}