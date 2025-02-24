import { CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { Date, DateAndTimeHeading, Month, Time, Week } from "@/Constants";

export const BootstrapCalendarBody = () => {
  return (
    <CardBody className="card-wrapper">
      <Row className="mb-3">
        <Label className="col-md-3 col-form-label">{DateAndTimeHeading}</Label>
        <Col md="9">
          <Input className="digits" type="datetime-local" defaultValue="2024-05-03T18:45:00" />
        </Col>
      </Row>
      <Row className="mb-3">
        <Label className="col-md-3 col-form-label">{Date}</Label>
        <Col md="9">
          <Input className="digits" type="date" defaultValue="2024-05-01" />
        </Col>
      </Row>
      <Row className="mb-3">
        <Label className="col-md-3 col-form-label">{Month}</Label>
        <Col md="9">
          <Input className="digits" type="month" defaultValue="2024-01" />
        </Col>
      </Row>
      <Row className="mb-3">
        <Label className="col-md-3 col-form-label">{Week}</Label>
        <Col md="9">
          <Input className="digits" type="week" defaultValue="2024-W09" />
        </Col>
      </Row>
      <Row className="mb-3">
        <Label className="col-md-3 col-form-label">{Time}</Label>
        <Col md="9">
          <Input className="digits" type="time" defaultValue="21:45:00" />
        </Col>
      </Row>
    </CardBody>
  );
};
