import { Col, Container, Row } from "reactstrap";
import LoginForm from "../Common/LoginForm";

export default function LoginWithValidation() {
  return (
    <Container fluid>
      <Row>
        <Col xl={7} className=" order-1 loginImageBg b-center bg-size">
        </Col>
        <Col xl={5} className="p-0">
          <div className="login-card login-dark">
            <LoginForm logoClass="text-start" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
