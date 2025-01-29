import { useAppSelector } from "@/ReduxToolkit/Hooks";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Badge } from "reactstrap";
import TodoListFooter from "./TodoListFooter";
import { markTaskAsCompleted, removeItems, selectItem } from "@/ReduxToolkit/Reducers/TodoReducer";
import { TodoListType } from "@/Types/Todo";

export default function TodoList() {
  const { allTodos, addNewTask } = useAppSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleRemoveTodo = (todoId: number, todo: string) => {
    dispatch(removeItems(todoId));
    toast.success(`${todo} deleted`);
  };
  const handleMarkedTodo = (item: TodoListType) => {
    dispatch(markTaskAsCompleted(item.id));
    if (item.status === "completed") {
      dispatch(selectItem({ id: item.id, status: "pending", badge: "Pending", badgeclass: "danger" }));
      toast.error(item.title + " as Incomplete");
    } else if (item.status === "pending") {
      dispatch(selectItem({ id: item.id, status: "completed", badge: "Done", badgeclass: "success" }));
      toast.success(item.title + " as Complete");
    }
  };
  return (
    <div className="todo-list-body custom-scrollbar">
      {addNewTask && <TodoListFooter />}
      <ul className="simple-list" id="todo-list">
        {allTodos.length > 0
          ? allTodos.map((todo, index) => (
              <li className={`task ${todo.status}`} key={index}>
                <div className="task-container">
                  <h4 className="task-label">{todo.title}</h4>
                  <div className="d-flex align-items-center gap-4">
                    <Badge color={todo.badgeclass}>{todo.badge}</Badge>
                    <h5 className="assign-name m-0">{todo.date}</h5>
                    <span className="task-action-btn">
                      <span className="action-box large delete-btn" onClick={() => handleRemoveTodo(todo.id, todo.title)}>
                        <i className="icon">
                          <i className="icon-trash"></i>
                        </i>
                      </span>
                      <span className="action-box large complete-btn" onClick={() => handleMarkedTodo(todo)}>
                        <i className="icon">
                          <i className="icon-check"></i>
                        </i>
                      </span>
                    </span>
                  </div>
                </div>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
}
