import { Card, CardBody, Col } from "reactstrap";
import { BarChartTwo } from "@/Constants";
import { Chart } from "react-google-charts";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BarOneChartData, BarOneChartDataOption } from "@/Data/Charts/GoogleChart";

const BarChart2 = () => {
  return (
    <Col sm="12" xl="6" className="box-col-12">
      <Card>
        <CommonCardHeader title={BarChartTwo} />
        <CardBody className="chart-block">
          <div className="chart-overflow" id="bar-chart2">
            <Chart chartType="BarChart" width="100%" height="400px" data={BarOneChartData} options={BarOneChartDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BarChart2;
