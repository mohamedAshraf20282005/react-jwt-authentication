import { useEffect } from "react";
import "./css/task.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../store/actions/tasks-action";

function Task(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const api_url = "http://localhost:4001";
  const { taskId, taskName } = props;

  const deleteTask = (taskId) =>
    axios({
      method: "delete",
      url: `${api_url}/deleteTask/${taskId}`,
    }).then(() => dispatch(fetchTasks()));

  return (
    <>
      <div className="task">
        <div className="task-container">
          <h4 className="task-title">{taskName}</h4>
          <div className="btns-container">
            <button onClick={() => deleteTask(taskId)}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
