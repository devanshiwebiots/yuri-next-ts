import { useAppDispatch } from "@/ReduxToolkit/Hooks";
import { fetchTodo } from "@/ReduxToolkit/Reducers/TodoReducer";
import { useEffect } from "react";
import { Container, Row } from "reactstrap";
import LeftTodo from "./LeftTodo";
import RightTodo from "./RightTodo";

export default function ToDoContainer() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  return (
    <Container fluid className="email-wrap bookmark-wrap todo-wrap">
      <Row>
        <LeftTodo />
        <RightTodo />
      </Row>
    </Container>
  );
}
