import { v4 as uuidv4 } from "uuid";
import { Storage } from "./Storage";
import UI from "./UI";

const Project = () => {
  let name;
  let todoList = [];
  let id = uuidv4();

  function createProject() {
    const $title = selectEle("#title");
    name = $title.value
    Storage.pushToArr(Project());
    //clearField($title, value);
  }

  function deleteProject(arr, obj) {
    return arr.filter((project) => project.id !== obj.id);
  }

  function editUI() {
    let inputEdit = document.createElement("input");
    inputEdit.focus();
    inputEdit.value = Project.name;
    selectEle('project-to-tasks').replaceWith(inputEdit);
    inputEdit.focus();
    inputEdit.addEventListener("focusout", (e) => {
      editProject(e.target.value);
    });
  }

  function editProject(newName) {
    this.name = newName;
  }

  function projectUI(arr) {
    const container = selectEle(".projects-container");
    clearField(container, textContent);
    arr.forEach((obj) => {
      const newProjectView = document.createElement("div");
      newProjectView.classList.add("project-view");
      newProjectView.innerHTML = `
              <button class="project-to-tasks" >${obj.name}</button>
              <button class="delete">Delete</button>
              <button class="edit">Edit</button>
        `;

      container.appendChild(newProjectView);
    });
    addEvents();
  }

  function addEvents() {
    fncForListener(".delete", "click", deleteProject);
    fncForListener(".edit", "click", editProject);
  }

  //help function

  function selectEle(ele) {
    return document.querySelectorAll(ele);
  }

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

  function clearField(ele) {
    ele.value = "";
  }
  return { id, name, todoList , createProject };
};

export default Project;
