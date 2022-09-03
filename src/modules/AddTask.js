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
        updateLocalStorage(project.id);
      });
    $taskField.appendChild(tasksAdd);
    checkLocalStorage(project.id);
  }

  function checkLocalStorage(projectID) {
    const tasks = Storage.getProjectById(projectID)[0].tasks;
    if (tasks.length !== 0) {
      taskList().addTaskContainer(tasks);
    }
  }

  function updateLocalStorage(projectID) {
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

    const tasks = Storage.getProjectById(projectID)[0].tasks;

    tasks.push(task);
    Storage.updateStorage();

    if (document.body.contains(document.querySelector(".tasks-list"))) {
      taskList().updateTaskContainer(tasks);
    } else {
      taskList().addTaskContainer(tasks);
    }
  }

  return { addTaskView };
};

export default addTask;
