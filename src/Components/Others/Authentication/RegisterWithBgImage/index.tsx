import { ImagePath } from "@/Constants";
import Image from "next/image";
import { Col, Container, Row } from "reactstrap";
import RegisterForm from "../Common/RegisterForm";

export default function RegisterWithBgImage() {
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xl={5} className="loginImageBg3 b-center bg-size p-0 ">
        </Col>
        <Col xl={7} className="p-0">
          <div className="login-card login-dark">
            <RegisterForm logoClass="text-start" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
