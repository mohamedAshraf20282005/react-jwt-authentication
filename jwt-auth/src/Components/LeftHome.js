import axios from "axios";
import "./css/leftHome.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../store/actions/tasks-action";

function LeftHome() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const api_url = "http://localhost:4001/createTask";

  const [taskName, setTaskName] = useState("");
  const [description, setdescription] = useState("");

  const sumbit = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: api_url,
      data: {
        taskName: taskName,
        description: description,
      },
    }).then(() => dispatch(fetchTasks()));
  };

  console.log(taskName);
  console.log(description);

  return (
    <div className="leftHome">
      <div className="task-box">
        <h2 className="box-title">New Task</h2>
        <div className="box-content">
          <form onSubmit={sumbit}>
            <input
              type="text"
              placeholder="task name"
              onChange={(e) => setTaskName(e.target.value)}
            />
            <input
              type="text"
              placeholder="description"
              onChange={(e) => setdescription(e.target.value)}
            />
            <input type="submit" className="btn-submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LeftHome;
