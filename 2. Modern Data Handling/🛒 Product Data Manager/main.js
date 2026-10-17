/* STEP 1: Select the HTML elements */
const productForm = document.querySelector("#productForm");
const productNameInput = document.querySelector("#productName");
const productPriceInput = document.querySelector("#productPrice");
const productList = document.querySelector("#productList");

/* STEP 2: Create an array to store products */
let products = [];

/* STEP 3: Listen for form submission */
productForm.addEventListener("submit", (event) =>{
    // Prevent the page from refreshing
    event.preventDefault();

    // Get the values from the inputs
    const name = productNameInput.value.trim();
    const price = Number(productPriceInput.value);

    // console.log(productNameInput)
    // console.log(productNameInput.value)

    // Stop if the values are invalid
    if(name === "" || !Number.isFinite(price) || price <= 0){
        return;
    }

    // Create a product object
    const newProduct = {
        id : Date.now(),
        name,
        price
    };

    // Use spread to create a new array with the added product
    products = [...products, newProduct];

    // Show the updated products
    renderProducts();

    // Clear the form
    productForm.reset();
});

// /* STEP 4: Display all products */
// function renderProducts(){
//     // Clear the old list before rendering again
//     productList.innerHTML = "";

//     // Loop through every product
//     products.forEach(({id,name,price}) => {
//         // Create a list item
//         const li = document.createElement("li");

//         // Display product information
//         const productInfo = document.createElement("span");
//         productInfo.textContent = `${name} - $${price.toFixed(2)}`;

//         // Create the Delete button
//         const deleteButton = document.createElement("button");
//         deleteButton.textContent = "delete";
//         deleteButton.type = "button";
//         deleteButton.style.marginLeft = "20px";
//         deleteButton.style.backgroundColor = "red";

//         // Delete the selected product
//         deleteButton.addEventListener("click", () => {
//             products = products.filter((product) => product.id !== id);

//             // Display the updated products
//             renderProducts();

//         })

//         // Add the product information and button to the list item
//         li.append(productInfo, deleteButton);
//         productList.appendChild(li);
//     })
// }




function renderProducts() {
  // Clear the old product list
  productList.innerHTML = "";

  // Loop through products using destructuring
  products.forEach(({ id, name, price }) => {
    const li = document.createElement("li");

    // Display product information
    const productInfo = document.createElement("span");
    productInfo.textContent = `${name} - $${price.toFixed(2)}`;

    // Create the Edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.type = "button";
    editButton.style.marginLeft = "10px";

    // Edit the selected product
    editButton.addEventListener("click", () => {
      const newName = prompt("Enter the new product name:", name);

      // Cancel if the user presses Cancel or enters an empty name
      if (newName === null || newName.trim() === "") {
        return;
      }

      const newPriceInput = prompt("Enter the new product price:", price);

      // Cancel if the user presses Cancel or enters an empty price
      if (newPriceInput === null || newPriceInput.trim() === "") {
        return;
      }

      const newPrice = Number(newPriceInput);

      // Check that the price is a valid positive number
      if (!Number.isFinite(newPrice) || newPrice <= 0) {
        alert("Please enter a valid price greater than zero.");
        return;
      }

      // Create an updated product using spread
      const updatedProduct = {
        ...products.find((product) => product.id === id),
        name: newName.trim(),
        price: newPrice
      };

      // Replace the old product with the updated product
      products = products.map((product) =>
        product.id === id ? updatedProduct : product
      );

      // Refresh the product list
      renderProducts();
    });

    // Create the Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.backgroundColor = "red";

    // Delete the selected product
    deleteButton.addEventListener("click", () => {
      products = products.filter((product) => product.id !== id);
      renderProducts();
    });

    // Add product information and buttons to the list item
    li.append(productInfo, editButton, deleteButton);
    productList.appendChild(li);
  });
}
