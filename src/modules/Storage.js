let arrStorage = [];

export const Storage = (() => {
  function getStorage() {
    return arrStorage;
  }

  function pushToArr(project) {
    arrStorage.push(project);
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
    pushToArr,
    updateStorage,
    checkStorage,
  };
})();
