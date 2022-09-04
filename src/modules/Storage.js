let arrStorage = [];

export const Storage = (() => {
  function getStorage() {
    return arrStorage;
  }

  function setStorage(arr) {
    arrStorage = arr;
  }

  function setNewElement(taskArr, TaskID) {
    let project;
    arrStorage.filter((obj) =>
      obj.tasks.filter((task) => {
        if (task.id === TaskID) project = obj;
      })
    );
    project.tasks = taskArr;
    Storage.updateStorage();
  }

  function pushToArr(project) {
    arrStorage.push(project);
  }

  function getProjectById(id) {
    return arrStorage.filter((obj) => obj.id === id);
  }

  function getTaskById(id) {
    let tasks;
    arrStorage.filter((obj) =>
      obj.tasks.filter((task) => {
        if (task.id === id) tasks = obj.tasks;
      })
    );
    return tasks;
  }

  function updateStorage() {
    localStorage.setItem("storage", JSON.stringify(arrStorage));
  }

  function checkStorage() {
    if (localStorage.getItem("storage")) {
      arrStorage = JSON.parse(localStorage.getItem("storage"));
    } else {
      arrStorage = [];
    }
  }

  return {
    getStorage,
    setStorage,
    pushToArr,
    setNewElement,
    getProjectById,
    getTaskById,
    updateStorage,
    checkStorage,
  };
})();
