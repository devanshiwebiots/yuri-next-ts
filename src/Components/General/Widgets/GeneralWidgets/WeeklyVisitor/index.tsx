import CommonDropdown from "@/CommonComponents/CommonDropdown";
import { Female, Male, Monthly, Weekly, Yearly } from "@/Constants";
import { Card, CardHeader, Col, Row } from "reactstrap";
import WeeklyVisitorBody from "./WeeklyVisitorBody";

const WeeklyVisitor = () => {
  return (
    <Col xl="4" md="7" sm="8" className="order-xl-vi col-xl-100 order-md-vi">
      <Row>
        <Col xs="12">
          <Card className="visitor-customer title-line widget-visitor">
            <CardHeader className="card-no-border">
              <div className="header-top">
                <h2>Weekly Visitors</h2>
                <div className="card-header-right-icon square-legend">
                  <div>
                    <div className="legend-box">
                      <div className="bg-primary" />
                      <span className="f-light f-12 f-w-500">{Male}</span>
                    </div>
                    <div className="legend-box">
                      <div className="bg-success" />
                      <span className="f-light f-12 f-w-500">{Female}</span>
                    </div>
                  </div>
                  <CommonDropdown dropdownItems={[Monthly, Weekly, Yearly]} dropdownToggle={"Report"} />
                </div>
              </div>
            </CardHeader>
            <WeeklyVisitorBody />
          </Card>
        </Col>
      </Row>
    </Col>
  );
};

export default WeeklyVisitor;
