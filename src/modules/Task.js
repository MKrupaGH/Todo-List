const Task = (name, status, priority, date) => {
  /*let date =
    new Date().getDate() +
    "." +
    new Date().getMonth() +
    "." +
    new Date().getFullYear();*/

  return { name, status, priority, date };
};

export default Task;
