import Project from "./Project";
import { Storage } from "./Storage";

const projectList = () => {
  function addListContainer() {
    Storage.checkStorage();
    const arr = Storage.getStorage();
    const $lists = document.querySelector(".lists");
    const listContainer = document.createElement("div");
    listContainer.setAttribute("class", "projects-container");

    arr.forEach((obj) => {
      listContainer.appendChild(Project().renderProjects(obj));
    });

    $lists.appendChild(listContainer);
  }

  return { addListContainer };
};

export default projectList;
