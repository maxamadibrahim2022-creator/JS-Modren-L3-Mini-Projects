"use strict";

// STEP 1: Create the user data.

// Test A — Complete profile
const user = {
  name: "Amina",
  email: "amina@example.com",
  profile: {
    city: "Mogadishu",
    bio: "Learning JavaScript",
  },
};

// Test B — Missing profile
// const user = {
//   name: "Amina",
//   email: null,
//   profile: null,
// };

// Test C — Falsy values
// const user = {
//   name: "",
//   email: "",
//   profile: {
//     city: "",
//     bio: ""
//   }
// };

// STEP 2: Select the HTML elements.
const avatarElement = document.querySelector("#avatar");
const nameElement = document.querySelector("#name");
const emailElement = document.querySelector("#email");
const cityElement = document.querySelector("#city");
const bioElement = document.querySelector("#bio");
const toggleButton = document.querySelector("#toggleButton");
const debugOutput = document.querySelector("#debugOutput");

// STEP 3: Prepare values safely.

// ?? uses "Guest" only if name is null or undefined.
const userName = user.name ?? "Guest";

// ?? also provides a fallback for a missing email.
const email = user.email ?? "Email unavailable";

// ?. safely accesses city if profile is null or undefined.
// ?? supplies a fallback if the result is null or undefined.
const city = user.profile?.city ?? "Unknown city";

// || uses a fallback if bio is any falsy value,
// including an empty string.
const bio = user.profile?.bio || "No bio available";

// STEP 4: Display the values in the HTML.
nameElement.textContent = userName;
emailElement.textContent = email;
cityElement.textContent = city;
bioElement.textContent = bio;

// STEP 5: Create an avatar letter.
avatarElement.textContent = userName.charAt(0) || "G";

// STEP 6: Show or hide the original data.
toggleButton.addEventListener("click", () => {
  const isHidden = debugOutput.hidden;

  debugOutput.textContent = JSON.stringify(user, null, 2);
  debugOutput.hidden = !isHidden;

  toggleButton.textContent = isHidden
    ? "Hide Profile Data"
    : "Show Profile Data";
});
