import { shared } from "./Shared";
import { Storage } from "./Storage";
import projectList from "./ProjectList";
import addTask from "./AddTask";

const Project = () => {
  function deleteProject(obj) {
    let arr = Storage.getStorage();
    arr = arr.filter((project) => project.id != obj.id);
    Storage.setStorage(arr);
    Storage.updateStorage();
    projectList().updateListContainer();
  }

  function editProject(obj, newName) {
    obj.name = newName;
    Storage.updateStorage();
    projectList().updateListContainer();
  }

  function editUI(obj) {
    let inputEdit = document.createElement("input");
    inputEdit.setAttribute("id", "inputChange");
    inputEdit.value = obj.name;

    for (const btn of document.querySelectorAll(".project-to-tasks")) {
      if (btn.textContent === obj.name) {
        btn.replaceWith(inputEdit);
      }
    }

    inputEdit.focus();
    inputEdit.addEventListener("focusout", (e) => {
      editProject(obj, e.target.value);
    });
  }

  function renderProjects(project) {
    const newProjectView = document.createElement("div");
    newProjectView.classList.add("project-view");
    newProjectView.innerHTML = `
              <button class="project-to-tasks" >${project.name}</button>
              <button class="delete">Delete</button>
              <button class="edit">Edit</button>
        `;

    newProjectView
      .querySelector(".delete")
      .addEventListener("click", function () {
        deleteProject(project);
      });
    newProjectView
      .querySelector(".edit")
      .addEventListener("click", function () {
        editUI(project);
      });
    newProjectView
      .querySelector(".project-to-tasks")
      .addEventListener("click", function () {
        addTask().addTaskView(project);
      });
    return newProjectView;
  }

  return { renderProjects };
};

export default Project;
