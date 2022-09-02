export const shared = (() => {
  function fncForListener(typeOfEle, typeOfListener, callFcn) {
    document.querySelectorAll(typeOfEle).forEach((type) =>
      type.addEventListener(typeOfListener, (e) => {
        if (typeOfEle == 'input[(type = "submit")]') {
          e.preventDefault();
          callFcn;
        } else {
          e.preventDefault();
          callFcn();
        }
      })
    );
  }
  return { fncForListener };
})();
