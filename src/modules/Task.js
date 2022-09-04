import { shared } from "./Shared";
import { Storage } from "./Storage";
import taskList from "./TaskList";

const Task = () => {
  function deleteTask(taskID) {
    let tasks = Storage.getTaskById(taskID);
    tasks = tasks.filter((task) => task.id != taskID);
    Storage.setNewElement(tasks, taskID);
    taskList().updateTaskContainer(tasks);
  }

  function editTask(task, newValue) {}

  function editUI(task) {
    const inputs = document.querySelectorAll("#myForm input");
    const select = document.querySelector("#myForm select");
    inputs[0].value = task.name;
    inputs[1].checked = task.status;
    inputs[2].value = task.date;
    select.value = task.priority;
    deleteTask(task.id);
  }

  function renderTasks(task) {
    const trTask = document.createElement("tr");
    trTask.innerHTML = `
        <td >${task.name}</td>
        <td >${task.status}</td>
        <td >${task.priority}</td>
        <td >${task.date}</td>
        <td>
        <button class="change"">Edit</button>
        </td>
        <td>
        <button class="delete"">Delete</button>
        </td>`;
    trTask.querySelector(".delete").addEventListener("click", function () {
      deleteTask(task.id);
    });
    trTask.querySelector(".change").addEventListener("click", function () {
      editUI(task);
    });
    return trTask;
  }

  return { renderTasks };
};

export default Task;
