import "./css/rightHome.css";
import Task from "./Task";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../store/actions/tasks-action";

function RightHome() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);
  console.log(state);
  return (
    <div className="rightHome">
      <h1>Tasks</h1>
      {state.map((task) => (
        <Task key={task.taskId} taskName={task.taskName} taskId={task.taskId} />
      ))}
    </div>
  );
}

export default RightHome;
