import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ChartJSBarChart } from "@/Constants";
import { ChartJsBarChartData, ChartJsBarChartDataOption } from "@/Data/Charts/ChartJS";
import { Bar } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";

const BarChart = () => {
  return (
    <Col xl="6" ms="12" className="box-col-6">
      <Card>
        <CommonCardHeader title={ChartJSBarChart} />
        <CardBody className="chart-block">
          <Bar id="myBarGraph" data={ChartJsBarChartData} options={ChartJsBarChartDataOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BarChart;
