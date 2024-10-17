document.addEventListener("DOMContentLoaded", function () {
  // Select the "Add Task" button
  const addButton = document.getElementById("add-task");
  // Select the task input field
  const taskInput = document.getElementById("task-input");
  // Select the unordered list for tasks
  const taskList = document.getElementById("task-list");

  // Initialize an array to hold tasks
  let tasks = [];

  // Load tasks from Local Storage when the page loads
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
  }

  // Function to add a new task
  function addTask(taskText, save = true) {
    // If save is true, we should save the task to Local Storage
    if (save) {
      tasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Add onclick event to remove the task
    removeButton.onclick = function () {
      // Remove the task from the array
      tasks = tasks.filter((task) => task !== taskText);
      // Update Local Storage
      localStorage.setItem("tasks", JSON.stringify(tasks));
      // Remove the list item from the DOM
      taskList.removeChild(listItem);
    };

    // Append the remove button to the list item
    listItem.appendChild(removeButton);
    // Append the list item to the task list
    taskList.appendChild(listItem);
  }

  // Event listener for the add button
  addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
    addTask(taskText); // Add task with saving
    taskInput.value = ""; // Clear the input field
  });

  // Event listener for the Enter key in the input field
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addButton.click(); // Trigger the add button
    }
  });

  // Load tasks from Local Storage on page load
  loadTasks();
});
