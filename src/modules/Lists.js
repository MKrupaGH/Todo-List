import { Task } from "./Task";

export default class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(taskName) {
    this.tasks = this.tasks.filter((task) => task.name !== taskName);
  }
}
