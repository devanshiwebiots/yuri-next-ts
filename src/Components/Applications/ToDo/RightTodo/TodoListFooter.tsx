import { useAppSelector } from "@/ReduxToolkit/Hooks";
import { addNewTodo, setAddNewTask } from "@/ReduxToolkit/Reducers/TodoReducer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input } from "reactstrap";

export default function TodoListFooter() {
  const { addNewTask } = useAppSelector((state) => state.todos);
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const handleNewTask = () => {
    if (task !== "") {
      dispatch(addNewTodo(task));
      setTask("");
    } else {
      return;
    }
  };
  return (
    <div className="todo-list-footer">
      <div className={`new-task-wrapper ${addNewTask ? "visible" : ""} `}>
        <Input type="textarea" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter new task here..." />
        <Button color="danger" className="cancel-btn" onClick={() => dispatch(setAddNewTask(!addNewTask))}>
          {"Close"}
        </Button>
        <Button color="success" className="ms-3 add-new-task-btn" onClick={handleNewTask}>
          {"Add Task"}
        </Button>
      </div>
    </div>
  );
}
