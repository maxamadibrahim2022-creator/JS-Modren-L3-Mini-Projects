// 1. Select HTML Element

const loadBtn = document.querySelector("#loadBtn");
const errorBtn = document.querySelector("#errorBtn");

const loading = document.querySelector("#loading");
const status = document.querySelector("#status");

const userCard = document.querySelector("#userCard");

const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const userRole = document.querySelector("#userRole");

// 2. SIMULATE LOADING USER DATA
function fetchUserData(shouldSucceed) {

  // Return a Promise to the caller.

  return new Promise((resolve, reject) => {

    // Simulate a request that takes 2 seconds.

    setTimeout(() => {
        
    

    if (shouldSucceed) {

      // Sample user data.
      const user = {
        name: "Maxamad Ibrahim",
        email: "maxamad@example.com",
        role: "Full Stack Developer",
      };

      // Fulfill the Promise with user data.
      resolve(user);

    }else{
         // Reject the Promise with an error.
         reject (new Error ("Failed to load user data!"));
    }

    }, 2000);

  });
}


// 3. DISPLAY USER DATA
function displayUserData(user){

    // Put the received data into the HTML.
    userName.textContent = user.name;
    userEmail.textContent = user.email;
    userRole.textContent = user.role;

    // Show the user information card.
    userCard.classList.remove("hidden");

}

// 4. HANDLE THE LOADING PROCESS
function loadUserData(shouldSucceed){

    // Hide previous user information.
    userCard.classList.add("hidden");

    // Show the loading indicator.
    loading.classList.remove("hidden");

    // Update the status.
    status.textContent = "Loading user data...";

    // Prevent multiple requests at the same time.
    loadBtn.disabled = true;
    errorBtn.disabled = true;

    // 5. HANDLE THE PROMISE
    fetchUserData(shouldSucceed)

    // Handle successful results.
    .then((user) => {

        displayUserData(user);
        status.textContent = "user load successfully!";
    })

    // Handle errors.
    .catch((error) =>{
       status.textContent = error.message;
    })

    // Run after success or failure.
    .finally(() =>{

        // Hide the loading indicator.
        loading.classList.add("hidden");

        // Enable both buttons again.
        loadBtn.disabled = false;
        errorBtn.disabled = false;
    })

}


// / 6. CONNECT BUTTON EVENTS

loadBtn.addEventListener("click", () => {

    // Request successful user data.
    loadUserData(true);

})

errorBtn.addEventListener("click", () => {

     // Simulate a failed request.
     loadUserData(false);
})
