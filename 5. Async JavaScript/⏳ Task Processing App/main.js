
// 1. SELECT HTML ELEMENTS

const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");
const statusText = document.querySelector("#status");
const logList = document.querySelector("#logList");

const downloadTask = document.querySelector("#downloadTask");
const processTask = document.querySelector("#processTask");
const saveTask = document.querySelector("#saveTask");

// Store task elements in order.
const taskElements = [
    downloadTask,
    processTask,
    saveTask
];

// Prevent multiple processing sequences.
let isProcessing = false;


// 2. DISPLAY HELPER FUNCTIONS

function updateStatus(message) {
    statusText.textContent = message;
}

function addLog(message) {
    const listItem = document.createElement("li");

    listItem.textContent = message;

    logList.appendChild(listItem);
}

// Add active styling to a task.
function activateTask(taskElement) {
    taskElement.classList.add("active");
}

// Remove active styling and mark the task complete.
function completeTask(taskElement) {
    taskElement.classList.remove("active");
    taskElement.classList.add("completed");
}


// 3. TASK 1: DOWNLOAD FILE

function downloadFile(callback) {
    activateTask(downloadTask);

    updateStatus("Downloading file...");
    addLog("Download started.");

    setTimeout(() => {
        completeTask(downloadTask);

        addLog("Download completed.");
        updateStatus("Download complete.");

        // Start the next task.
        callback();
    }, 2000);
}


// 4. TASK 2: PROCESS FILE

function processFile(callback) {
    activateTask(processTask);

    updateStatus("Processing file...");
    addLog("Processing started.");

    setTimeout(() => {
        completeTask(processTask);

        addLog("Processing completed.");
        updateStatus("Processing complete.");

        // Start the next task.
        callback();
    }, 2000);
}


// 5. TASK 3: SAVE FILE

function saveFile(callback) {
    activateTask(saveTask);

    updateStatus("Saving file...");
    addLog("Saving started.");

    setTimeout(() => {
        completeTask(saveTask);

        addLog("Saving completed.");
        updateStatus("Saving complete.");

        // All tasks have finished.
        callback();
    }, 2000);
}


// 6. PROCESS ALL TASKS USING CALLBACKS

function startProcessing() {
    if (isProcessing) {
        return;
    }

    isProcessing = true;

    startBtn.disabled = true;
    resetBtn.disabled = true;

    logList.innerHTML = "";

    taskElements.forEach((taskElement) => {
        taskElement.classList.remove("active", "completed");
    });

    updateStatus("Processing started...");
    addLog("Task processing started.");

    // Task 1 → Task 2 → Task 3.
    downloadFile(() => {
        processFile(() => {
            saveFile(() => {
                updateStatus("All tasks completed!");
                addLog("All tasks completed successfully.");

                isProcessing = false;

                // Enable buttons after processing.
                startBtn.disabled = false;
                resetBtn.disabled = false;
            });
        });
    });
}


// 7. RESET THE PROJECT

function resetProcessing() {
    if (isProcessing) {
        return;
    }

    logList.innerHTML = "";

    taskElements.forEach((taskElement) => {
        taskElement.classList.remove("active", "completed");
    });

    updateStatus("Ready to start.");
    addLog("Ready to start processing.");
}


// 8. CONNECT BUTTON EVENTS

startBtn.addEventListener("click", startProcessing);
resetBtn.addEventListener("click", resetProcessing);
