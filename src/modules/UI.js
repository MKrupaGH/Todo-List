import Project from "./Lists";
import Storage from "./Storage";
export default class UI {
  //Layout
  static loadHomePage() {
    UI.loadPage();
    UI.addProjectView();
    UI.addEventListeners();
  }

  static loadPage = () => {
    const panel = document.createElement("div");
    panel.classList.add("site");
    panel.innerHTML = `
        <div class='navbar'>
            <h1>Let's make things done!</h1>
        </div>
        <div class='lists'>
            <h2>Project's list</h2>
            <div class='projects-list'>

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
  };

  static addProjectView = () => {
    const projectsList = document.querySelector(".projects-list");
    const addForm = document.createElement("form");

    addForm.innerHTML = `
        <input type="text" name="title" id="title" placeholder="Title..." required>
        <input type="submit" value="Add project"> 
      `;

    projectsList.appendChild(addForm);
  };

  //Project title
  static createProject = () => {
    const $title = document.querySelector("#title");
    Storage.checkLocalStorage();
    Storage.updateStorage(new Project($title.value));
    UI.ProjectView(Storage.checkLocalStorage());
  };

  static ProjectView = (data) => {
    data.forEach((obj, index) => {
      const newProjectView = document.createElement("div");
      newProjectView.classList.add("project-view");

      newProjectView.innerHTML = `
            <button class="project-to-tasks" pro-num="${index}">${obj.title}</button>
        `;
      document.querySelector(".projects-list").appendChild(newProjectView);
    });
  };

  //Event listeners

  static addEventListeners = () => {
    const $form = document
      .querySelector("form")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        UI.createProject();
      });
  };
}
