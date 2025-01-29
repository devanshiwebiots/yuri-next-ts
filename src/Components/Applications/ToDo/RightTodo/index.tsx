import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ToDo } from "@/Constants";
import { Card, CardBody, Col } from "reactstrap";
import MarkTasks from "./MarkTasks";
import TodoList from "./TodoList";

export default function RightTodo() {
  return (
    <Col xl={9} className="xl-70 box-col-12">
      <Card>
        <CommonCardHeader headClass="d-flex align-items-center justify-content-between" title={ToDo} />
        <CardBody>
          <div className="todo">
            <div className="todo-list-wrapper">
              <div className="todo-list-container">
                <MarkTasks />
                <TodoList />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
