import Project from "./Project";
import { Storage } from "./Storage";
import addProject from "./AddProject";
import { v4 as uuidv4 } from "uuid";
import projectList from "./ProjectList";

//nazwa Main js
// dodac id do Projectu (UUidv4)
const UI = () => {
  const loadPage = (() => {
    const panel = document.createElement("div");
    panel.classList.add("site");
    panel.innerHTML = `
        <div class='navbar'>
            <h1>Let's make things done!</h1>
        </div>
        <div class='lists'>
            <h2>Project's list</h2>
        </div>
        <div class='task-menu'>
        </div>
        <div class="footer">
            <p>Created by Marek Krupa!</p>
        </div>
        `;
    document.querySelector("body").appendChild(panel);
  })();

  addProject();
  projectList().addListContainer();

  //Tasks UI and func
  //leci do task
  //do task dodaje id
  /*function createTask(e) {
    console.log("createTask - work");
    const $taskName = document.querySelector("#taskName");
    const $status = document.querySelector("#status");
    const $priority = document.querySelector("#priority");
    const $date = document.querySelector("#date");

    const newTask = Task(
      $taskName.value,
      $status.checked,
      $priority.value,
      $date.value
    );
    const arr = Storage.getStorage();
    arr[findIndex(e)]["todoList"].push(newTask);
    Storage.updateStorage();
    Storage.checkStorage();
    TaskView(e);
  }

  /*function TaskView(e) {
    console.log("Task view - Work");
    const $addMenu = document.querySelector(".task-add-menu");
    const $tasksList = document.querySelector(".tasks-list");
    $addMenu.style.display = "flex";
    $tasksList.style.display = "flex";

    $addMenu.setAttribute("pro-num", findIndex(e));

    const taskTitle = document.querySelector(".list-title h1");
    //const value = e.target.textContent;
    //taskTitle.textContent = value;

    //View of ready tasks

    const $taskList = document.querySelector("tbody");

    Storage.checkStorage();
    const arr = Storage.getStorage();

    taskTitle.textContent = arr[findIndex(e)].name;
    $taskList.textContent = "";
    arr[findIndex(e)]["todoList"].forEach((task, index) => {
      const bookListed = `
      <tr>
        <td>${task.name}</td>
        <td>${task.status}</td>
        <td>${task.priority}</td>
        <td>${task.date}</td>
        <td>
        <button class="change" data-value="${index}">Edit</button>
        </td>
        <td>
        <button class="delete" data-value="${index}">Delete</button>
        </td>
      </tr> `;

      $taskList.insertAdjacentHTML("afterbegin", bookListed);
    });
  }*/
};

export default UI;
