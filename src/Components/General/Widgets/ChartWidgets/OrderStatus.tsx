import { Href, OrdersStatusHeading, Today, Tomorrow, Yesterday } from "@/Constants";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { ProgressChart1, ProgressChart2, ProgressChart3, ProgressChart4, ProgressChart5 } from "@/Data/General/Widgets/Chart";
import { useState } from "react";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import CommonDropdown from "@/CommonComponents/CommonDropdown";

const OrderStatus = () => {
  const [dropdownOpens, setDropdownOpens] = useState(false);
  const toggleMenu = () => setDropdownOpens((prevState) => !prevState);

  return (
    <Col xl="6" lg="12" className="box-col-6 xl-50">
      <Card>
        <CommonCardHeader title={OrdersStatusHeading} />
        <CardBody>
          <div className="chart-container progress-chart">
            <ReactApexChart id="progress1" options={ProgressChart1} series={ProgressChart1.series} type="bar" height={70} />
            <ReactApexChart id="progress2" options={ProgressChart2} series={ProgressChart2.series} type="bar" height={70} />
            <ReactApexChart id="progress3" options={ProgressChart3} series={ProgressChart3.series} type="bar" height={70} />
            <ReactApexChart id="progress4" options={ProgressChart4} series={ProgressChart4.series} type="bar" height={70} />
            <ReactApexChart id="progress5" options={ProgressChart5} series={ProgressChart5.series} type="bar" height={70} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrderStatus;
