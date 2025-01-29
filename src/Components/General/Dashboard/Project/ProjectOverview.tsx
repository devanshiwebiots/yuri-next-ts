import CommonDropdown from "@/CommonComponents/CommonDropdown";
import { Monthly, Weekly, Yearly } from "@/Constants";
import { ProectOverviewChartOptions, ProjectOverviewChart2Options } from "@/Data/General/Widgets/General";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const ProjectOverviewDashboard = () => {
  return (
    <Col xxl="7" xl="6" lg="6" md="6" className="box-col-6">
      <Card className="height-equal title-line">
        <CardHeader className="card-no-border">
          <div className="header-top">
            <h2>Projects Overview</h2>
            <div className="card-header-right-icon right-xl-dropdown">
              <CommonDropdown dropdownItems={[Monthly, Weekly, Yearly]} dropdownToggle="Monthly" />
            </div>
          </div>
        </CardHeader>
        <CardBody className=" pt-0">
          <div className="project-overview-wrapper">
            <ReactApexChart height="230" type="line" series={ProjectOverviewChart2Options.series} options={ProjectOverviewChart2Options} />
            <div className="project-back-bar">
              <ReactApexChart height="130" type="bar" series={ProectOverviewChartOptions.series} options={ProectOverviewChartOptions} />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectOverviewDashboard;
