import { ToDoFilter } from "@/Constants";
import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import ProfileHeader from "./ProfileHeader";
import TodoNav from "./TodoNav";

export default function LeftTodo() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Col xl={3} className="xl-30 box-col-12">
      <div className="email-sidebar md-sidebar">
        <Button color="primary" className="email-aside-toggle md-sidebar-toggle" onClick={toggle}>
          {ToDoFilter}
        </Button>
        <div className={`email-left-aside md-sidebar-aside ${isOpen ? "open" : ""}`}>
          <Card>
            <CardBody>
              <div className="email-app-sidebar left-bookmark custom-scrollbar">
                <ProfileHeader />
                <TodoNav />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </Col>
  );
}
