const myPromise = new Promise((resolve, reject) => {
    resolve("Food is ready!");
});

myPromise.then((result) => {
    console.log(result);
});



// Example 2
Promise.resolve(100)

    // Step 1: Add 10% tax.
    .then((price) => {
        return price + (price * 0.10);
    })

    // Step 2: Apply a $5 discount.
    .then((priceWithTax) => {
        return priceWithTax - 5;
    })

    // Step 3: Display the final price.
    .then((finalPrice) => {
        console.log(`Final price: $${finalPrice}`);
    });


 {   // Example 3 All together
    const myPromise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Order successful!");
    } else {
        reject("Order failed!");
    }

});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });}




// Example 4
Promise.resolve(100)

    .then((price) => {
        console.log("Price received:", price);

        return price + 20;
    })

    .then((newPrice) => {
        console.log("New price:", newPrice);

        throw new Error("Payment failed!");
    })

    .then((result) => {
        console.log("Payment successful:", result);
    })

    .catch((error) => {
        console.log("Error:", error.message);
    });

  


// Example 5 
function loadUser() {

    console.log("Loading user...");

    return new Promise((resolve, reject) => {

        // Simulate a successful request.
        setTimeout(() => {
            resolve("User loaded successfully!");
        }, 2000);

    });
}

loadUser()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Loading finished.");
    });