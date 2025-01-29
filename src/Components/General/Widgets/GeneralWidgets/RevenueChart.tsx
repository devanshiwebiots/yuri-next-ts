import { RevenueChartOptions } from "@/Data/General/Widgets/General";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const RevenueChart = () => {
  return (
    <Col xl="2" sm="6" md="3" className="order-md-i">
      <Card className="title-line widget-1 revenue-wrapper">
        <CardHeader className="card-no-border">
          <h2>Revenue</h2>
          <span className="f-w-500 f-12 f-light mt-0">
            Today Revenue <span className="txt-primary">30% OFF</span>
          </span>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="revenue-chart-container">
            <ReactApexChart series={RevenueChartOptions.series} options={RevenueChartOptions} type="line" height={140} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RevenueChart;
