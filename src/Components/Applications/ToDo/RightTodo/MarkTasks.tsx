import { useAppSelector } from "@/ReduxToolkit/Hooks";
import { markTaskAsCompleted, setAddNewTask } from "@/ReduxToolkit/Reducers/TodoReducer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Button } from "reactstrap";

export default function MarkTasks() {
  const dispatch = useDispatch();
  const [markAll, setMarkAll] = useState(false);
  const { allTodos, addNewTask } = useAppSelector((state) => state.todos);

  const addNewTaskHandle = () => {
    dispatch(setAddNewTask(!addNewTask));
  };
  const markAllStatus = () => {
    if (markAll === true) {
      allTodos.forEach((todo) => {
        dispatch(markTaskAsCompleted(todo.id));
      });
      toast.error("All Task In-Completed !");
    } else {
      allTodos.forEach((todo) => {
        dispatch(markTaskAsCompleted(todo.id));
      });
      toast.success("All Task Completed !");
    }
    setMarkAll(!markAll);
  };
  return (
    <div className="mark-all-tasks">
      <div className="mark-all-tasks-container">
        <span className="mark-all-btn  d-flex align-items-center gap-1">
          <span className={`btn-label txt-${markAll ? "success" : "danger"}`}>{!markAll ? "Mark all as finished" : "Mark all as Incomplete"}</span>
          <span className="action-box completed" onClick={markAllStatus}>
            {markAll && (
              <i className="icon">
                <i className="icon-check" />
              </i>
            )}
          </span>
        </span>
      </div>
      <div className="todo-list-footer ms-2">
        <div className="add-task-btn-wrapper">
          <span className={`add-task-btn ${addNewTask ? "hide" : ""}`}>
            <Button color="primary" onClick={addNewTaskHandle}>
              <i className="icon-plus"></i> {"Add new task"}
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
}
