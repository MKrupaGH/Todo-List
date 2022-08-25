export default class Task {
  constructor(name, status) {
    this.name = name;
    this.status = status;
    this.date =
      new Date().getDate() +
      "." +
      new Date().getMonth() +
      "." +
      new Date().getFullYear();
  }

  editTask(name) {
    this.name = name;
  }

  getInfo() {
    return { name: this.name, status: this.status };
  }


}
