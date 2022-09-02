import { Storage } from "./Storage";
import { v4 as uuidv4 } from "uuid";
import { shared } from "./Shared";
import projectList from "./ProjectList";

const addProject = () => {
  (function addProjectView() {
    const parent = document.querySelector(".lists");
    const form = document.createElement("form");
    form.setAttribute("id", "projectForm");
    form.innerHTML = `
        <input type="text" name="title" id="title" placeholder="Title..." required>
        <input type="submit" value="Add project"> 
      `;
    parent.appendChild(form);
    shared.fncForListener("input[type='submit']", "click", updateLocalStorage);
  })();

  function updateLocalStorage() {
    const $title = document.querySelector("#title");
    const id = uuidv4();
    Storage.pushToArr({ name: $title.value, id: id, tasks: [] });
    $title.value = "";
    Storage.updateStorage();
    
    if (document.body.contains(document.querySelector(".projects-container"))) {
      projectList().updateListContainer();
    } else {
      projectList().addListContainer();
    }
  }
};

export default addProject;
