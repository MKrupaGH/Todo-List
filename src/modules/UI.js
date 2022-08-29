import Project from "./Project";
import { Storage } from "./Storage";
import Task from "./Task";
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
            <div class='projects-list'>
              <form></form>
              <div class="projects-container"></div>
            </div>
        </div>
        <div class='task-menu'>
            <div class='list-title'>
              <h1></h1>
            </div>
            <div class="task-add-menu" style="display:none">
              <form id="myForm">
                <input type="text" id="taskName" placeholder="Task name..." name="name">
                <div class="checkBox">
                  <label for="status">Done</label>
                  <input type="checkbox" id="status" name='status' value="done">
                </div>
                
                <select name="priority" id="priority">
                  <option value="urgent">Urgent</option>
                  <option value="medium">Medium</option>
                  <option value="unimportant">Unimportant</option>
                </select>
                <input type="date" id="date" name="date">
                
              </form>
              <input type='submit' value='Add task' form="myForm">
            </div>
            <div class="tasks-list" style="display:none">
              <table>
                  <thead>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Priority</th>
                      <th>Date</th>
                      <th>Edit</th>
                      <th>Delete</th>
                  </thead>
                  <tbody>

                  </tbody>
              </table>
            </div>
        </div>
        <div class="footer">
            <p>Created by Marek Krupa!</p>
        </div>
        `;
    document.querySelector("body").appendChild(panel);
  })();

  const addProjectView = (() => {
    const addForm = document.querySelector("form");
    fncForListener("form", "submit", createProject);
    addForm.innerHTML = `
        <input type="text" name="title" id="title" placeholder="Title..." required>
        <input type="submit" value="Add project"> 
      `;
  })();

  //Project UI and Title
  function createProject() {
    const $title = document.querySelector("#title");
    //jak zrobic referencje przez nazwe, bez wywolywania do zmiennej?
    //IIFE i wtedy tylko refer?
    const localFcn = Storage();
    localFcn.pushToArr(Project($title.value));
    localFcn.updateStorage();
    $title.value = "";
    ProjectView(localFcn.getStorage());
  }

  function findIndex(e) {
    return e.target.parentNode.getAttribute("pro-num");
  }

  function deleteProject(e) {
    const arr = Storage().getStorage();
    arr.splice(findIndex(e), 1);
    e.target.parentElement.remove();
    Storage().updateStorage();
    Storage().checkStorage();
    ProjectView(Storage().getStorage());
  }

  function editProject(e) {
    let inputEdit = document.createElement("input");
    //inputEdit = `<input value=${e.target.parentElement.firstElementChild.textContent} name="name" id="inputChange">`;
    inputEdit.focus();
    inputEdit.setAttribute("id", "inputChange");
    inputEdit.value = e.target.parentElement.firstElementChild.textContent;
    e.target.parentElement.firstElementChild.replaceWith(inputEdit);
    inputEdit.focus();
    document.querySelector("#inputChange").addEventListener("focusout", (e) => {
      console.log(e.target.parentNode.getAttribute("pro-num"));
      const arr = Storage().getStorage();
      arr[findIndex(e)]["name"] = e.target.value;
      Storage().updateStorage();
      Storage().checkStorage();
      ProjectView(Storage().getStorage());
    });
  }

  function ProjectView(data) {
    const container = document.querySelector(".projects-container");
    container.textContent = "";
    data.forEach((obj, index) => {
      const newProjectView = document.createElement("div");
      newProjectView.classList.add("project-view");
      newProjectView.setAttribute("pro-num", `${index}`);
      newProjectView.innerHTML = `
              <button class="project-to-tasks" >${obj.name}</button>
              <button class="delete">Delete</button>
              <button class="edit">Edit</button>
        `;

      container.appendChild(newProjectView);
    });
    fncForListener(".project-to-tasks", "click", TaskView);
    fncForListener(".delete", "click", deleteProject);
    fncForListener(".edit", "click", editProject);
  }

  //Tasks UI and func

  function createTask() {
    const $taskName = document.querySelector("#taskName");
  }

  function TaskView(e) {
    const $addMenu = document.querySelector(".task-add-menu");
    const $tasksList = document.querySelector(".tasks-list");
    $addMenu.style.display = "flex";
    $tasksList.style.display = "flex";

    const taskTitle = document.querySelector(".list-title h1");
    const value = e.target.textContent;
    taskTitle.textContent = value;
  }

  //Check storage onLoad

  const generateStorage = (() => {
    Storage().checkStorage();
    const values = Storage().getStorage();
    ProjectView(values);
  })();

  //Event listeners

  /*const addEventListeners = (() => {
    const $form = document
      .querySelector("form")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        createProject();
      });
    const $projectBtns = document
      .querySelectorAll(".project-to-tasks")
      .forEach((btn) => {
        btn.addEventListener("click", TaskView);
      });
  })();*/

  function fncForListener(typeOfEle, typeOfListener, callFcn) {
    document.querySelectorAll(typeOfEle).forEach((type) =>
      type.addEventListener(typeOfListener, (e) => {
        if ((typeOfEle = "form")) {
          e.preventDefault();
          callFcn(e);
        } else {
          callFcn(e);
        }
      })
    );
  }
};

export default UI;
