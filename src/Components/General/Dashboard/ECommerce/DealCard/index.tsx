import { Card, CardBody, Col, Row } from "reactstrap";
import CountdownData from "./Countdown";
import DealSlider from "./DealSlider";

export default function DealCard() {
  return (
    <Col xl={12} sm={6}>
      <Card className="title-line deal-card">
        <CardBody className="left-line deal-animation">
          <Row className="align-items-center">
            <Col xs={12}>
              <Row className="g-4">
                <Col xl={8} md={12}>
                  <h2>{"Deal of the day"}</h2>
                  <span className="f-light f-12 f-w-500">
                    {"Special Discount "}
                    <span className="txt-primary f-12 f-w-500 discount-offer">{"60% OFF"}</span>
                  </span>
                  <CountdownData />
                </Col>
                <DealSlider />
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
}
