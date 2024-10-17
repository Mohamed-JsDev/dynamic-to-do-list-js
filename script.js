document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== " ") {
      const listItem = document.createElement("li");
      listItem.textContent = taskText;
      textContent.appendChild("");

      const removeButton = document.createElement("button");
      removeButton.textContent = "remove";
      removeButton.className = "remove-btn";
      removeButton.onclick = () => {
        const task = taskList.filter(() => task !== taskText);
      };
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
      taskInput.value = " ";
    } else {
      alert("input is empty");
      return;
    }
  }
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === enter) {
      addTask();
    }
  });
  addButton.addEventListener("click", addTask());
});
