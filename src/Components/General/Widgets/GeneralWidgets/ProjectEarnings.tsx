import CommonDropdown from "@/CommonComponents/CommonDropdown";
import { ProjectEarningOptions, ProjectEarningSeries } from "@/Data/General/Widgets/General";
import ReactApexChart from "react-apexcharts";
import { TrendingUp } from "react-feather";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const ProjectEarnings = () => {
  return (
    <Col xl="3" md="4" sm="6">
      <Card className="project-widget widget-1 title-line project-widget-1">
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
                <TrendingUp className="me-1" />
                <span>+60%</span>
              </span>
            </div>
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="earning-chart-container tooltip-small">
            <ReactApexChart series={ProjectEarningSeries} options={ProjectEarningOptions} type="bar" height={100} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectEarnings;
