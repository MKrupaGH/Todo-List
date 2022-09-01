import { v4 as uuidv4 } from "uuid";
import { Storage } from "./Storage";
import UI from "./UI";

const Project = () => {

  function deleteProject(arr, obj) {
    return arr.filter((project) => project.id !== obj.id);
  }

  function editUI() {
    let inputEdit = document.createElement("input");
    inputEdit.focus();
    inputEdit.value = Project.name;
    selectEle("project-to-tasks").replaceWith(inputEdit);
    inputEdit.focus();
    inputEdit.addEventListener("focusout", (e) => {
      editProject(e.target.value);
    });
  }

  function editProject(newName) {
    this.name = newName;
  }

  function renderProjects(project) {
    const newProjectView = document.createElement("div");
    newProjectView.classList.add("project-view");
    newProjectView.innerHTML = `
              <button class="project-to-tasks" >${project.name}</button>
              <button class="delete">Delete</button>
              <button class="edit">Edit</button>
        `;
    return newProjectView
  }

  function addEvents() {
    fncForListener(".delete", "click", deleteProject);
    fncForListener(".edit", "click", editProject);
  }
  return {renderProjects};
};

export default Project;
