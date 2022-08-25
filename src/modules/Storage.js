export default class Storage {
  static updateStorage(storage) {
    localStorage.setItem("storage", JSON.stringify(storage));
  }

  static checkLocalStorage() {
    if (localStorage.getItem("storage")) {
      return JSON.parse(localStorage.getItem("storage"));
    }
  }
}
