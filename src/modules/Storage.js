let arrStorage = [];

export const Storage = (() => {
  function getStorage() {
    return arrStorage;
  }

  function setStorage(arr) {
    arrStorage = arr;
  }

  function pushToArr(project) {
    arrStorage.push(project);
  }

  function getProjectById(id) {
    return arrStorage.filter((obj) => obj.id === id);
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
    getProjectById,
    updateStorage,
    checkStorage,
  };
})();
