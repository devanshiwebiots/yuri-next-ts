import { Card, Col, Row } from "reactstrap";
import { CalendarBootstrap } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BootstrapCalendarBody } from "./BootstrapCalendarBody";

const BootstrapCalendar = () => {
  return (
    <Col xl="6">
      <Card className="title-line">
        <CommonCardHeader title={CalendarBootstrap} />
        <BootstrapCalendarBody/>
      </Card>
    </Col>
  );
};

export default BootstrapCalendar;
