// Select elements
const input = document.querySelector(".input input");
const addBtn = document.querySelector("button");
const padding = document.querySelector(".padding");
// Create task list container
const taskList = document.createElement("ul");
taskList.style.listStyle = "none";
taskList.style.padding = "0";
taskList.style.marginTop = "20px";
padding.appendChild(taskList);
// Function to create task
function createTask(taskText) {
  // List item
  const li = document.createElement("li");
  li.style.display = "flex";
  li.style.alignItems = "center";
  li.style.justifyContent = "space-between";
  li.style.margin = "10px 0";
  li.style.padding = "10px 5px";
  li.style.borderBottom = "1px solid #E5E8EB";
  // Left side (checkbox + text)
  const leftDiv = document.createElement("div");
  leftDiv.style.display = "flex";
  leftDiv.style.alignItems = "center";
  leftDiv.style.gap = "10px";
  // Checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  // Task text
  const span = document.createElement("span");
  span.textContent = taskText;
  span.style.fontSize = "16px";
  span.style.color = "#0D121C";
  // Strike through when done
  checkbox.addEventListener("change", () => {
    span.style.textDecoration = checkbox.checked ? "line-through" : "none";
    span.style.color = checkbox.checked ? "#6B7280" : "#0D121C";
  });
  leftDiv.appendChild(checkbox);
  leftDiv.appendChild(span);
  // Right side (icons)
  const rightDiv = document.createElement("div");
  rightDiv.style.display = "flex";
  rightDiv.style.gap = "12px";
  // Edit icon (pencil)
  const editIcon = document.createElement("span");
  editIcon.innerHTML = "✏️";
  editIcon.style.cursor = "pointer";
  editIcon.style.fontSize = "16px";

  editIcon.addEventListener("click", () => {
    const newText = prompt("Edit task:", span.textContent);
    if (newText && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  });
  // Delete icon (dustbin)
  const deleteIcon = document.createElement("span");
  deleteIcon.innerHTML = "🗑️"; 
  deleteIcon.style.cursor = "pointer";
  deleteIcon.style.fontSize = "16px";

  deleteIcon.addEventListener("click", () => {
    li.remove();
  });
  rightDiv.appendChild(editIcon);
  rightDiv.appendChild(deleteIcon);
  // Append to li
  li.appendChild(leftDiv);
  li.appendChild(rightDiv);
  taskList.appendChild(li);
}
// Function to add task
function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;
  createTask(taskText);
  input.value = "";
}
// Add task with button
addBtn.addEventListener("click", addTask);
// Add task with Enter key
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
