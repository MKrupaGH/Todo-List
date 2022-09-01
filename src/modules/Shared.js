export const shared = (() => {
  function fncForListener(typeOfEle, typeOfListener, callFcn) {
    document.querySelectorAll(typeOfEle).forEach((type) =>
      type.addEventListener(typeOfListener, (e) => {
        if ((typeOfEle = "form")) {
          e.preventDefault();
          callFcn(e);
        } else {
          e.preventDefault();
          callFcn(e);
        }
      })
    );
  }
  return { fncForListener };
})();
