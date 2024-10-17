document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = taskText;

      const removeButton = document.createElement("button");
      removeButton.textContent = "remove";
      removeButton.className = "remove-btn";
      removeButton.onclick = () => {
        taskList.removeChild(listItem);
      };
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
      taskInput.value = "";
    } else {
      alert("input is empty");
      return;
    }
  }
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
  addButton.addEventListener("click", addTask);
});
