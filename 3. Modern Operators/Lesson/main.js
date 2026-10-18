{// Topic 1: Optional chaining ?.

// 🟡 3. Three practical examples
 // Example A — User profile
 const user = {
  name: "Ahmed"
};
// The profile might not exist
console.log(user.profile?.email);


// Example B — Product information
const product = {
  name: "Laptop"
};

// The manufacturer might be missing
console.log(product.details?.manufacturer);


// Example C — Nested data
const employee = {
  name: "Fatima",
  office: {
    location: {
      city: "Hargeisa"
    }
  }
};

// Safely access nested properties
console.log(employee.office?.location?.city);

// 🚀 Next concept: Optional chaining with arrays

// Example 1
{const data = {};
// Safely access the first user
console.log(data.users?.[0]);}

// Example 2
{const data = {
  users: ["Ali", "Ahmed"]
};
console.log(data.users?.[0]);}

// Example 3
{const data = {
  users: []
};
console.log(data.users?.[0]?.name);}

// Example 4
{const user = {
  profile: null
};
console.log(user.profile?.city);}

// 🧠 The key lesson
// Optional chaining (?.) protects you from accessing properties on null or undefined.
// You have now covered several important cases:
// - Accessing object properties safely.
// - Calling optional methods.
// - Accessing array elements safely.
// - Handling empty arrays and null values.
}


// Concept 2: Nullish Coalescing (??)

// Example 1
console.log(false ?? true);
console.log("" ?? "Unknown");
console.log(undefined ?? "Default");

// Example 2
const user = {
  name: "Ali",
  city: null
};

const username = user.name ?? "Guest";
const userCity = user.city ?? "Unknown city";

console.log(username); // Ali
console.log(userCity); // Unknown city

// Example 3
const quantity = 0;
const result = quantity ?? 10;
console.log(result);

{// Example 4
const user = {
  profile: null
};
const city = user.profile?.city ?? "Unknown";
console.log(city); } // unkwown

// 🧠 Remember how the two operators work together

// 1:Optional chaining — ?.
// Safely accesses a property when an earlier value might be missing.
// Here: returns undefined because profile is null.

// 2: Nullish coalescing — ??
// Supplies a fallback if the result is null or undefined.
// Here: returns "Unknown".


// Concept 3: ?? vs ||

// Example 1
const score = 0;

console.log(score ?? 100); // 0
console.log(score || 100); // 100

// Example 2
const product = {
  name: "Free Sample",
  price: 0
};

// Keep 0 because it is a valid price.
const priceWithNullish = product.price ?? 10;

// Uses 10 because 0 is falsy.
const priceWithOr = product.price || 10;

console.log(priceWithNullish); // 0
console.log(priceWithOr);      // 10

// Example 3
const isLoggedIn = false;

console.log(isLoggedIn ?? true);  //Fale
console.log(isLoggedIn || true);  //True

{// Example 4
const isLoggedIn = false;

// Preserve the actual login status.
const status1 = isLoggedIn ?? true;

// Replace a falsy value with true.
const status2 = isLoggedIn || true;

console.log(status1); // false
console.log(status2); }// true

// Example 5
{const username = "";

console.log(username ?? "Guest");   // ""
console.log(username || "Guest"); }  // "Guest"