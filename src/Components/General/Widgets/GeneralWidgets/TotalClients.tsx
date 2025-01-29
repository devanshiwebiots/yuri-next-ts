import CommonDropdown from "@/CommonComponents/CommonDropdown";
import { ClientChartOptions, ClientChartSeries } from "@/Data/General/Widgets/General";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { TrendingUp } from "react-feather";

const TotalClients = () => {
  return (
    <Col xl="3" md="4" sm="6">
      <Card className="project-widget overflow-hidden widget-1 title-line">
        <CardHeader className="card-no-border pb-0">
          <div className="header-top">
            <div>
              <h3 className="f-w-600">Total Clients</h3>
              <span className="f-12 f-light f-w-500">Compare to last month</span>
            </div>
            <div className="card-header-right-icon">
              <div className="dropdown icon-dropdown">
                <CommonDropdown />
              </div>
            </div>
          </div>
          <div className="widget-middle-content">
            <div className="d-flex align-items-center">
              <h2>930</h2>
              <span className="f-w-500 txt-warning f-12">
                <TrendingUp className="me-1" />
                <span>+20%</span>
              </span>
            </div>
          </div>
        </CardHeader>
        <CardBody className="p-0">
          <div className="client-chart-container tooltip-small">
            <ReactApexChart options={ClientChartOptions} series={ClientChartSeries} type="area" height="145" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalClients;
