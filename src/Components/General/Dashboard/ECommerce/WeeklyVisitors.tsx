import CommonDropdown from "@/CommonComponents/CommonDropdown";
import { Female, Male, Monthly, Weekly, Yearly } from "@/Constants";
import { WeeklyVisitorChart } from "@/Data/General/Dashboard/ECommerce";
import ReactApexChart from "react-apexcharts";
import { TrendingDown, TrendingUp } from "react-feather";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

const WeeklyVisitors = () => {
  return (
    <Col xs="12" className="col-xl-50">
      <Card className=" visitor-customer title-line">
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
              <CommonDropdown dropdownToggle="Report" dropdownItems={[Monthly, Weekly, Yearly]} />
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xl="7" sm="8" md="7" className=" col-xl-100 ">
              <ReactApexChart series={WeeklyVisitorChart.series} height={110} type="line" options={WeeklyVisitorChart} />
            </Col>
            <Col xl="5" md="5" sm="4" className="d-xl-none1">
              <div className="average-Visitors">
                <div>
                  <span className="f-12 f-light f-w-500">Average Male Visitors</span>
                  <div className="order-content">
                    <h3 className="f-w-600">3,908</h3>
                    <div>
                      <span className="txt-success f-12 f-w-600">
                        <TrendingUp className="stroke-success" />
                        -27%
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="f-12 f-light f-w-500">Average Female Visitors</span>
                  <div className="order-content">
                    <h3 className="f-w-600">1,204</h3>
                    <div>
                      <span className="txt-danger f-12 f-w-600">
                        <TrendingDown className="stroke-danger" />
                        -0.10%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WeeklyVisitors;
