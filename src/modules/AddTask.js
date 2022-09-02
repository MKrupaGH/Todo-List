import { Storage } from "./Storage";
import { v4 as uuidv4 } from "uuid";
import { shared } from "./Shared";
import taskList from "./TaskList";
const addTask = () => {
  function addTaskView(project) {
    const $taskField = document.querySelector(".task-menu");
    $taskField.textContent = "";
    const listTitle = document.createElement("div");
    listTitle.setAttribute("class", "list-title");
    listTitle.innerHTML = `<h1>${project.name}</h1>`;
    $taskField.appendChild(listTitle);

    const tasksAdd = document.createElement("div");
    tasksAdd.setAttribute("class", "task-add-menu");
    tasksAdd.innerHTML = `
              <form id="myForm">
                <input type="text" id="taskName" placeholder="Task name..." name="name" required>
                <div class="checkBox">
                  <label for="status">Done</label>
                  <input type="checkbox" id="status" name='status'>
                </div>
                
                <select name="priority" id="priority" required>
                  <option value="urgent">Urgent</option>
                  <option value="medium">Medium</option>
                  <option value="unimportant">Unimportant</option>
                </select>
                <input type="date" id="date" name="date">
                
              </form>
              <input type='submit' value='Add task' form="myForm" id="submitTask">`;
    tasksAdd
      .querySelector("#submitTask")
      .addEventListener("click", function (e) {
        e.preventDefault();
        updateLocalStorage(project);
      });
    $taskField.appendChild(tasksAdd);
  }

  function updateLocalStorage(project) {
    const $taskName = document.querySelector("#taskName");
    const $status = document.querySelector("#status");
    const $priority = document.querySelector("#priority");
    const $date = document.querySelector("#date");
    const id = uuidv4();
    const task = {
      name: $taskName.value,
      status: $status.checked,
      priority: $priority.value,
      date: $date.value,
      id: id,
    };
    project.tasks.push(task);
    Storage.updateStorage();

    taskList().addTaskContainer(project);
  }

  return { addTaskView };
};

export default addTask;
