import { PipelineChartOptions } from "@/Data/General/Widgets/General";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const SalesPipeline = () => {
  return (
    <Col xl="3" md="5" sm="4" className="order-md-v">
      <Card className="title-line widget-1 sales-pipeline pipeline-chart1">
        <CardHeader className="card-no-border">
          <h2>Sales Pipeline</h2>
          <span className="f-w-500 f-12 f-light mt-0">
            Special Discount <span className="txt-primary">60% OFF</span>
          </span>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="pipeline-chart-container">
            <ReactApexChart series={PipelineChartOptions.series} options={PipelineChartOptions} type="donut" height={270} width={270} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SalesPipeline;
