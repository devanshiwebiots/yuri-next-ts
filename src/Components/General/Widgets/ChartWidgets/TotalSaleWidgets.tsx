import { Card, CardBody, Col, Row } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { SaleChartData } from "@/Data/General/Widgets/Chart";

const TotalSaleWidgets = () => {
  return (
    <Row>
      {SaleChartData.map((data, index) => (
        <Col xl="4" md="12" className="box-col-12" key={index}>
          <Card className="o-hidden">
            <div className="chart-widget-top">
              <CardBody className="row pb-0 m-0">
                  <Col xl="9" lg="8" xs="9" className="p-0">
                    <h5 className="mb-2">{data.title}</h5>
                    <h2>{data.amount}</h2>
                    <span>{data.description}</span>
                  </Col>
                  <Col xl="3" lg="4" xs="3" className="text-end p-0">
                    <h6 className="txt-success">{data.percentage}</h6>
                  </Col>
              </CardBody>
              <div>
                <div id={data.id}>
                  <ReactApexChart options={data.chart} series={data.chart.series} type={data.chart.chart?.type} height={215}/>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default TotalSaleWidgets;