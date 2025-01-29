import { Href, ToDoList } from "@/Constants";
import { useAppSelector } from "@/ReduxToolkit/Hooks";
import { TodoListType } from "@/Types/Todo";
import { useState } from "react";
import { Activity, Cast, CheckCircle, FilePlus, Trash } from "react-feather";
import { Badge, Button, Nav, NavItem } from "reactstrap";

export default function TodoNav() {
  const { allTodos } = useAppSelector((state) => state.todos);
  const [showTodos, setShowTodos] = useState<TodoListType[]>(allTodos);
  const handleShowAllTodos = () => {
    setShowTodos(allTodos);
  };
  const handleShowFilteredTodos = (filter: string) => {
    const filteredTodos = allTodos.filter((data) => data.badge === filter);
    setShowTodos(filteredTodos);
  };

  return (
    <Nav className="main-menu">
      <NavItem>
        <Button color="primary" block className="txt-light btn-mail w-100">
          <CheckCircle className="me-2" />
          {ToDoList}
        </Button>
      </NavItem>
      <NavItem>
        <a href={Href} onClick={handleShowAllTodos}>
          <span className="iconbg badge-light-primary">
            <FilePlus />
          </span>
          <span className="title ms-2">{"All Task"}</span>
        </a>
      </NavItem>
      <NavItem>
        <a href={Href} onClick={() => handleShowFilteredTodos("Done")}>
          <span className="iconbg badge-light-success">
            <CheckCircle />
          </span>
          <span className="title ms-2">{"Completed"}</span>
          <Badge color="success">{allTodos.filter((data) => data.badge === "Done").length}</Badge>
        </a>
      </NavItem>
      <NavItem>
        <a href={Href} onClick={() => handleShowFilteredTodos("Pending")}>
          <span className="iconbg badge-light-danger">
            <Cast />
          </span>
          <span className="title ms-2">{"Pending"}</span>
          <Badge color="danger">{allTodos.filter((data) => data.badge === "Pending").length}</Badge>
        </a>
      </NavItem>
      <NavItem>
        <a href={Href} onClick={() => handleShowFilteredTodos("In Progress")}>
          <span className="iconbg badge-light-info">
            <Activity />
          </span>
          <span className="title ms-2">{"In Process"}</span>
          <Badge color="primary">{allTodos.filter((data) => data.badge === "In Progress").length}</Badge>
        </a>
      </NavItem>
      <NavItem>
        <a href={Href}>
          <span className="iconbg badge-light-danger">
            <Trash />
          </span>
          <span className="title ms-2">{"Trash"}</span>
        </a>
      </NavItem>
    </Nav>
  );
}
