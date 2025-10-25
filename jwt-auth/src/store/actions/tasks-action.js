export const GET_ALL_TASKS = "GET_ALL_TASKS";

const getTasks = (tasks) => {
  return {
    type: GET_ALL_TASKS,
    payload: tasks,
  };
};

export const fetchTasks = () => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:4001/getAllTasks");
    const tasks = await res.json();
    dispatch(getTasks(tasks));
  };
};
