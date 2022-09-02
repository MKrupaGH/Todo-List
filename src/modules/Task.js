import { shared } from "./Shared";
import { Storage } from "./Storage";

const Task = () => {
  function renderTasks(task) {
    const trTask = document.createElement("tr");
    console.log('WOrk');
    trTask.innerHTML = `
        <td>${task.name}</td>
        <td>${task.status}</td>
        <td>${task.priority}</td>
        <td>${task.date}</td>
        <td>
        <button class="change"">Edit</button>
        </td>
        <td>
        <button class="delete"">Delete</button>
        </td>`;
    
    return trTask;
  }

  return { renderTasks };
};

export default Task;
