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
            </div>
            <div class="tasks-list">
            
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
    addForm.innerHTML = `
        <input type="text" name="title" id="title" placeholder="Title..." required>
        <input type="submit" value="Add project"> 
      `;
  })();

  //Project UI and Title
  const createProject = () => {
    const $title = document.querySelector("#title");
    //jak zrobic referencje przez nazwe, bez wywolywania do zmiennej?
    //IIFE i wtedy tylko refer?

    const localFcn = Storage();
    localFcn.pushToArr(Project($title.value));
    localFcn.updateStorage();

    ProjectView(localFcn.getStorage());
  };

  const ProjectView = (data) => {
    const container = document.querySelector(".projects-container");
    container.textContent = "";
    data.forEach((obj, index) => {
      const newProjectView = document.createElement("div");
      newProjectView.classList.add("project-view");
      newProjectView.setAttribute("pro-num", `${index}`);
      newProjectView.innerHTML = `
            <div class="pro-name" ">
              <button class="project-to-tasks" >${obj.name}</button>
            </div>
            <div class="btn-func">
              <button class="delete">Delete</button>
              <button class="edit">Edit</button>
            </div>
            
        `;
      container.appendChild(newProjectView);
    });
  };

  //Check storage onLoad

  const generateStorage = (() => {
    Storage().checkStorage();
    const values = Storage().getStorage();
    ProjectView(values);
  })();

  //Event listeners

  const addEventListeners = (() => {
    const $form = document
      .querySelector("form")
      .addEventListener("submit", (e) => {
        e.preventDefault();

        createProject();
      });
  })();
};

export default UI;
