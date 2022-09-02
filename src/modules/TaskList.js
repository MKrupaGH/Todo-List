import { Storage } from "./Storage";
import { shared } from "./Shared";
import Task from "./Task";
const taskList = () => {
  Storage.checkStorage();
  const arr = Storage.getStorage();

  function addTaskContainer(project) {
    const $taskField = document.querySelector(".task-menu");
    const taskContainer = document.createElement("div");
    taskContainer.setAttribute("class", ".tasks-list");

    taskContainer.innerHTML = `<table>
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
              </table>`;
    const container = taskContainer.querySelector("tbody");

    arr.forEach((obj) => {
      if (obj.id === project.id) {
        obj.tasks.forEach((task) => {
          container.appendChild(Task().renderTasks(task));
        });
      }
    });

    $taskField.appendChild(taskContainer);
  }

  return { addTaskContainer };
};

export default taskList;
