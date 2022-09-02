import Project from "./Project";
import { Storage } from "./Storage";
import { shared } from "./Shared";

const projectList = () => {
  Storage.checkStorage();
  const arr = Storage.getStorage();
  function addListContainer() {
    const $lists = document.querySelector(".lists");
    const listContainer = document.createElement("div");

    listContainer.setAttribute("class", "projects-container");

    listContainer.textContent = "";

    arr.forEach((obj) => {
      listContainer.appendChild(Project().renderProjects(obj));
    });
    $lists.appendChild(listContainer);
  }

  function updateListContainer() {
    const $listContainer = document.querySelector(".projects-container");
    $listContainer.textContent = "";
    arr.forEach((obj) => {
      $listContainer.appendChild(Project().renderProjects(obj));
    });
  }

  return { addListContainer, updateListContainer };
};

export default projectList;
