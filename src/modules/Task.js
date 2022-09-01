import { v4 as uuidv4 } from "uuid";
import Project from "./Project";

const Task = (name, status, priority, date) => {
  let id = uuidv4();

  


  return { id, name, status, priority, date };
};

export default Task;
