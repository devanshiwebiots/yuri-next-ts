import { TicketData } from "@/Data/Miscellaneous/SupportTicket";
import CountUp from "react-countup";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";
import ProfitAndLoss from "./ProfitAndLoss";

const TicketList = () => {
  return (
    <Row>
      {TicketData.map((item, index) => (
        <Col xl="4" md="6" className="box-col-4" key={index}>
          <Card className="ecommerce-widget">
            <CardBody className="support-ticket-font">
              <Row>
                <Col xs="5">
                  <span>{item.title}</span>
                  <h3 className="total-num counter">
                    <CountUp end={item.num} className="text-dark mb-1" delay={1} />
                  </h3>
                </Col>
                <ProfitAndLoss />
              </Row>
              <div className="progress-showcase mt-3">
                <Progress value={70} className={`sm-progress-bar progress-bar ${item.class}`} style={{ width: "70%" }}></Progress>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default TicketList;
