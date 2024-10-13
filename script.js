document.addEventListener("DOMContentLoaded", function () {
  // Select the "Add Task" button
  const addButton = document.getElementById("add-button");
  // Select the task input field
  const taskInput = document.getElementById("task-input");
  // Select the unordered list for tasks
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  function addTask() {
    // Get the task input value
    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
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
      taskList.removeChild(listItem);
    };

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
  }

  // Event listener for the add button
  addButton.addEventListener("click", addTask);

  // Event listener for the Enter key in the input field
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
