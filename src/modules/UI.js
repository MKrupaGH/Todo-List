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
};

export default UI;
