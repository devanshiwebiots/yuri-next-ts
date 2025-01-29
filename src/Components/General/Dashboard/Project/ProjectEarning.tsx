import CommonDropdown from "@/CommonComponents/CommonDropdown";
import { ProjectEarningChart } from "@/Data/General/Dashboard/Project";
import ReactApexChart from "react-apexcharts";
import { TrendingUp } from "react-feather";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const ProjectEarning = () => {
  return (
    <Col xl="3" sm="6">
      <Card className=" project-widget widget-1 title-line">
        <CardHeader className="card-no-border pb-0">
          <div className="header-top">
            <div>
              <h3 className="f-w-600">Projects Earnings</h3>
              <span className="f-12 f-light f-w-500">From last Week</span>
            </div>
            <div className="card-header-right-icon d-xxl-none">
              <CommonDropdown />
            </div>
          </div>
          <div className="widget-middle-content">
            <div className="d-flex align-items-center">
              <h2>$202</h2>
              <span className="f-w-500 txt-warning f-12">
                <TrendingUp />
                <span>+60%</span>
              </span>
            </div>
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="earning-chart-container tooltip-small">
            <ReactApexChart series={ProjectEarningChart.series} options={ProjectEarningChart} height={100} type="bar" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectEarning;
