// STEP 1: Select the first input
const firstNumberInput = document.querySelector("#firstNumber");

// STEP 2: Select the second input
const secondNumberInput = document.querySelector("#secondNumber");

// STEP 3: Select the result element
const result = document.querySelector("#result");

// STEP 4: Select the Add button
const addButton = document.querySelector("#addButton");

// STEP 5: Select the Subtract button
const subtractButton = document.querySelector("#subtractButton");

// STEP 6: Select the Multiply button
const multiplyButton = document.querySelector("#multiplyButton");

// STEP 7: Select the Divide button
const divedeButton = document.querySelector("#divedeButton");

// STEP 8: Create a function to get the numbers
const getNumbers = () => {
  // Get the first input value
  const firstNumber = Number(firstNumberInput.value);

  // Get the second input value
  const secondNumber = Number(secondNumberInput.value);

  // Check if an input is empty
  if (firstNumberInput.value === "" || secondNumberInput.value === "") {
    result.textContent = "Please enter both numbers ⚠️";

    return null;
  }

  // Return both numbers
  return {
    firstNumber,
    secondNumber,
  };
};

// STEP 9: Add two numbers
const add = () => {
  // Get the numbers
  const numbers = getNumbers();

  // Stop if validation failed
  if (numbers === null) {
    return;
  }

  // Calculate the result
  const answer = numbers.firstNumber + numbers.secondNumber;

  // Show the result
  result.textContent = `Result:  ${answer}`;
};

// STEP 10: Run add() when the Add button is clicked
addButton.addEventListener("click", add);

// STEP 11: Subtract two numbers
const subtract = () => {
  // Get the numbers
  const numbers = getNumbers();

  // Calculate the result
  const answer = numbers.firstNumber - numbers.secondNumber;

  // Show the result
  result.textContent = `Result:  ${answer}`;
};
// STEP 12: Run subtract() when clicked
subtractButton.addEventListener("click", subtract);

// STEP 13: Multiply two numbers
const Multiply = () => {
  // Get the numbers
  const numbers = getNumbers();

  // Calculate the result
  const answer = numbers.firstNumber * numbers.secondNumber;

  // Show the result
  result.textContent = `Result:  ${answer}`;
};
// STEP 14: Run multiply() when clicked
multiplyButton.addEventListener("click", Multiply);

// STEP 15: Divide two numbers
const Divide = () => {
  // Get the numbers
  const numbers = getNumbers();

  // Calculate the result
  const answer = numbers.firstNumber / numbers.secondNumber;

  // Show the result
  result.textContent = `Result:  ${answer}`;
};
// STEP 16: Run divide() when clicked
divedeButton.addEventListener("click", Divide);

// STEP 17: Select the Clear button
const clearButton = document.querySelector("#clearButton");

// STEP 18: Create clear function
const clearCalculator = () => {
  // Clear first input
  firstNumberInput.value = "";

  // Clear second input
  secondNumberInput.value = "";

  // Reset result
  result.textContent = "Result: —";
};
// STEP 19: Run clearCalculator when clicked
clearButton.addEventListener("click", clearCalculator);


// STEP 20: Create one reusable calculator function
const Calculate = (firstNumber, secondNumber, operation = "add") => { 

    // Check which operation the user selected
    if(operation === "subtract"){
        return firstNumber - secondNumber;
    }
    if(operation === "multiply"){
        return firstNumber * secondNumber;
    }
    if(operation === "divide"){
        // Prevent division by zero
        if(secondNumber === 0){
            return null;
        }
        return firstNumber / secondNumber;
    }

    // If operation is unknown
    return null;
}
