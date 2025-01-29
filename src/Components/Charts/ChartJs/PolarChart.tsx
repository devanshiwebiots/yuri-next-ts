import { Card, CardBody, Col } from "reactstrap";
import { ChatJSPolarChart } from "@/Constants";
import { PolarArea } from "react-chartjs-2";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { PolarChartData, PolarChartDataOption } from "@/Data/Charts/ChartJS";

const PolarChart = () => {
  return (
    <Col xl="6" ms="12" className="box-col-6">
      <Card>
        <CommonCardHeader title={ChatJSPolarChart} />
        <CardBody className="chart-block">
          <PolarArea id="myPolarGraph" data={PolarChartData} options={PolarChartDataOption} width={734} height={335} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PolarChart;
