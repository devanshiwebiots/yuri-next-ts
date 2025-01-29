import { ImagePath } from "@/Constants";
import Image from "next/image";
import { Col, Row } from "reactstrap";

export default function UserDetails() {
  return (
    <Row>
      <Col md={4}>
        <div className="d-flex">
          <div className="media-left">
            <Image height={100} width={100} className="media-object rounded-circle img-60 h-auto" src={`${ImagePath}/user/1.jpg`} alt="user" />
          </div>
          <div className="flex-grow-1 m-l-20">
            <h4 className="media-heading">{"Angel Deo"}</h4>
            <p>
              {"AngelDeo@gmail.com"}
              <br />
              <span>{"555-555-5555"}</span>
            </p>
          </div>
        </div>
      </Col>
      <Col md={8}>
        <div className="text-md-end" id="project">
          <h6>{"Project Description"}</h6>
          <p>{"You're Only As Good As Your Last Collection, Which Is An Enormous Pressure. Jeans Represent Democracy In Fashion.Fashion Is About Dressing According To What's Fashionable."}</p>
        </div>
      </Col>
    </Row>
  );
}
