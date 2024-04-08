const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something");
        return; // Exit function if input is empty
    }

    // Create new <li> element for the task
    const li = document.createElement("li");
    li.textContent = inputBox.value.trim();

    // Create close button (span)
    const span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);

    // Append the new task to the list container
    listContainer.appendChild(li);

    // Clear input box after adding task
    inputBox.value = '';

    // Save updated tasks to localStorage
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("taskList", listContainer.innerHTML);
}

function showTasks() {
    const savedTasks = localStorage.getItem("taskList");
    if (savedTasks) {
        listContainer.innerHTML = savedTasks;
    }
}

// Display saved tasks when the page loads
showTasks();
