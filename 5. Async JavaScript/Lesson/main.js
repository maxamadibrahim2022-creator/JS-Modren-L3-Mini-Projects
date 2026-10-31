// Example 1

console.log("Task 1: Start");

// JavaScript executes this line after Task 1.
console.log("Task 2: Working");

// JavaScript executes this line after Task 2.
console.log("Task 3: Finished");


// Example 2

console.log("Task 1: Start");

// Schedule this callback to run after approximately 2 seconds.
setTimeout(() => {
  console.log("Task 2: Delayed task");
}, 2000);

// This line runs without waiting for the timer.
console.log("Task 3: Finished");



// Example 3
// 1. Define a function named eat.
function eat() {
    console.log("I am eating");
}

// 2. Define a function with a parameter named callback.
function work(callback) {

    // 4. Call the function received by callback.
    callback();
}

// 3. Pass eat into work.
work(eat);
console.log("============")
// Example 4
function study() {
    console.log("Learning JavaScript");
}

function practice(callback) {
    console.log("Practice started");

    callback();

    console.log("Practice finished");
}

practice(study);


// 🟡 Module 5: Async JavaScript — Concept 3: Callback Problems
console.log("============")
// Example 5
function downloadFile(callback) {
    console.log("1. File downloaded");
    callback();
}

function processFile(callback) {
    console.log("2. File processed");
    callback();
}

function saveFile() {
    console.log("3. File saved");
}

// Run the tasks in sequence.
downloadFile(function () {
    processFile(function () {
        saveFile();
    });
});


// Example  
function taskA(callback) {
    console.log("A");
    callback();
}

function taskB(callback) {
    console.log("B");
    callback();
}

function taskC() {
    console.log("C");
}

taskA(function () {
    taskB(function () {
        taskC();
    });
});
