
import Product from "./product.js";

// STEP 1: Select HTML elements
const productForm = document.querySelector("#productForm");
const productName = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");
const productList = document.querySelector("#productList");

// STEP 2: Listen for form submission
productForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // STEP 3: Get input values
  const name = productName.value.trim();
  const price = Number(productPrice.value);

  // STEP 4: Validate the product name
  if (name === "") {
    alert("Please enter a product name.");
    return;
  }

  // STEP 5: Validate the product price
  if (
    productPrice.value.trim() === "" ||
    !Number.isFinite(price) ||
    price < 0
  ) {
    alert("Please enter a valid, non-negative price.");
    return;
  }

  // STEP 6: Create a Product object
  const product = new Product(name, price);

  // STEP 7: Create the product list item
  const productItem = document.createElement("li");

  // STEP 8: Create the product information
  const productInfo = document.createElement("span");
  productInfo.textContent = product.showInfo();

  // STEP 9: Create the Edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.type = "button";
  editButton.style.backgroundColor = "#2563eb"

  // STEP 10: Edit the product when clicked
  editButton.addEventListener("click", function () {
    // Ask for the new product name
    const newName = prompt("Enter the new product name:", product.name);

    // Stop if the user cancels
    if (newName === null) {
      return;
    }

    // Ask for the new product price
    const newPriceInput = prompt(
      "Enter the new product price:",
      product.price
    );

    // Stop if the user cancels
    if (newPriceInput === null) {
      return;
    }

    // Convert and validate the new values
    const updatedName = newName.trim();
    const updatedPrice = Number(newPriceInput.trim());

    if (updatedName === "") {
      alert("Product name cannot be empty.");
      return;
    }

    if (
      newPriceInput.trim() === "" ||
      !Number.isFinite(updatedPrice) ||
      updatedPrice < 0
    ) {
      alert("Please enter a valid, non-negative price.");
      return;
    }

    // Update the existing Product object
    product.name = updatedName;
    product.price = updatedPrice;

    // Refresh the displayed product information
    productInfo.textContent = product.showInfo();
  });

  // STEP 11: Create the Delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.type = "button";

  // STEP 12: Delete this product when clicked
  deleteButton.addEventListener("click", function () {
    productItem.remove();
  });

  // STEP 13: Add all elements to the list item
  productItem.append(productInfo, editButton, deleteButton);

  // STEP 14: Display the product
  productList.appendChild(productItem);

  // STEP 15: Clear the form
  productForm.reset();
});

