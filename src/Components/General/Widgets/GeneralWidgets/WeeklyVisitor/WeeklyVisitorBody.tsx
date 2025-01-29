import { WeeklyVisitorChartOptions } from "@/Data/General/Widgets/General";
import ReactApexChart from "react-apexcharts";
import { TrendingDown, TrendingUp } from "react-feather";
import { CardBody, Col, Row } from "reactstrap";

const WeeklyVisitorBody = () => {
  return (
    <CardBody className="visitor-wrapper">
      <Row>
        <Col xl="7" sm="7">
          <ReactApexChart series={WeeklyVisitorChartOptions.series} height={110} type="line" options={WeeklyVisitorChartOptions} />
        </Col>
        <Col xl="5" sm="5" className=" d-xl-none1">
          <div className="average-Visitors">
            <div>
              <span className="f-12 f-light f-w-500">Average Male Visitors</span>
              <div className="order-content">
                <div>
                  <span className="txt-success f-12 f-w-600">
                    <TrendingUp />   -27%
                  </span>
                </div>
              </div>
            </div>
            <div>
              <span className="f-12 f-light f-w-500">Average Female Visitors</span>
              <div className="order-content">
                <div>
                  <span className="txt-danger f-12 f-w-600">
                    <TrendingDown />
                    -0.10%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </CardBody>
  );
};

export default WeeklyVisitorBody;
