import CommonDropdown from "@/CommonComponents/CommonDropdown";
import { AverageEarningChartOptions } from "@/Data/General/Dashboard/Project";
import ReactApexChart from "react-apexcharts";
import { TrendingUp } from "react-feather";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";

const AverageEarning = () => {
  const AverageEarningsDay = ["1d", "10d", "1m", "6m", "1y"];
  return (
    <Col xl="4" md="6" className="box-col-4">
      <Card className=" title-line earning-tread">
        <CardHeader className=" card-no-border">
          <div className="header-top">
            <div>
              <h2>Avg. Earnings</h2>
            </div>
            <div className="card-header-right-icon">
              <CommonDropdown />
            </div>
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <Row className=" gy-2">
            <Col xxl="6" md="12" sm="6">
              <div className="earning-left-content">
                <h2>$342,091.56</h2>
                <div>
                  <span className="f-12 f-w-500 txt-warning">
                    <TrendingUp />
                    +20%
                  </span>
                  <span className="f-12 f-w-500 f-light ms-2">Than Last Week</span>
                </div>
              </div>
            </Col>
            <Col xxl="6" md="12" sm="6" className=" d-xxl-block d-xl-none">
              <ul className="earning-right-content">
                <li>
                  <span className="f-12 f-w-500 f-light">10:45 PM</span>
                  <span className="f-12 f-w-500 txt-success">+732.67</span>
                </li>
                <li>
                  <span className="f-12 f-w-500 f-light">03:20 AM</span>
                  <span className="f-12 f-w-500 txt-danger">-108.09</span>
                </li>
              </ul>
            </Col>
          </Row>
          <ul className="earning-buttons">
            {AverageEarningsDay.map((item, i) => (
              <li key={i}>
                <Button color="light">{item}</Button>
              </li>
            ))}
          </ul>
          <div className="avg-earning-chart-container">
            <ReactApexChart options={AverageEarningChartOptions} series={AverageEarningChartOptions.series} height={160} type="line" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AverageEarning;
