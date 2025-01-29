import CommonDropdown from "@/CommonComponents/CommonDropdown";
import { Monthly, Order, Weekly, Yearly } from "@/Constants";
import { RevenueAndOrderChartOptions } from "@/Data/General/Dashboard/ECommerce";
import ReactApexChart from "react-apexcharts";
import { Card, CardHeader, Col } from "reactstrap";

const RevenueAndOrder = () => {
  const chartOptions = {
    ...RevenueAndOrderChartOptions,
    tooltip: {
      enabled: true,
      enabledOnSeries: true, 
    }
  };
  return (
    <Col xl="9" md="8" className="col-xl-100 order-xl-i ">
      <Card className="title-line revenue-header">
        <CardHeader className=" card-no-border">
          <div className="header-top">
            <h2>Revenue vs Order</h2>
            <div className="card-header-right-icon square-legend">
              <div>
                <div className="legend-box">
                  <div className="bg-primary" />
                  <span className="f-light f-12 f-w-500">Revenue</span>
                </div>
                <div className="legend-box">
                  <div className="bg-success" />
                  <span className="f-light f-12 f-w-500">{Order}</span>
                </div>
              </div>
              <CommonDropdown dropdownToggle="Monthly" dropdownItems={[Monthly, Weekly, Yearly]} />
            </div>
          </div>
        </CardHeader>
        <div className="card-body">
          <ReactApexChart className="revenue-order" id="revenue-order" type="line" height={225} options={chartOptions} series={chartOptions.series} />
        </div>
      </Card>
    </Col>
  );
};

export default RevenueAndOrder;
