import CommonDropdown from "@/CommonComponents/CommonDropdown";
import { Development, Marketing, WebDesigner } from "@/Constants";
import { ExpectedEarningsOptions } from "@/Data/General/Dashboard/ECommerce";
import ReactApexChart from "react-apexcharts";
import { TrendingUp } from "react-feather";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const ExpectedEarning = () => {
  return (
    <Col xl="12" sm="6">
      <Card className=" height-equal title-line earning-chart-option">
        <CardHeader className="card-no-border">
          <div className="header-top">
            <h2>
              $78,098
              <span className="txt-success f-12 f-w-600 ms-2">
                <TrendingUp className="stroke-success" />
                -29%
              </span>
              <span className="f-12 f-w-500 f-light d-block">Expected Earnings</span>
            </h2>
            <div className="card-header-right-icon">
              <CommonDropdown dropdownItems={[WebDesigner, Development, Marketing]} dropdownToggle="Report" />
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <ReactApexChart type="polarArea" height={250} options={ExpectedEarningsOptions} series={ExpectedEarningsOptions.series}/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ExpectedEarning;
