import { configureStore } from "@reduxjs/toolkit";
import { GET_ALL_TASKS } from "../actions/tasks-action";

const getAllTasks = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_TASKS:
      return [...action.payload];
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: getAllTasks,
});
