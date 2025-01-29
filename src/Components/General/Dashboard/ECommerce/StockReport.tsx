import CommonDropdown from "@/CommonComponents/CommonDropdown";
import { StockReportColumns, StockReportData } from "@/Data/General/Dashboard/ECommerce";
import DataTable from "react-data-table-component";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

export default function StockReport() {
  return (
    <Col xl={7} md={6} sm={12} className="col-xl-100 order-xl-iii">
      <Card className="height-equal title-line overflow-hidden ">
        <CardHeader className="card-no-border">
          <div className="header-top">
            <h2>
              Stock Report
              <span className="f-12 f-w-500 f-light d-block">{"Total 4,998 Items in stock"}</span>
            </h2>
            <div className="card-header-right-icon stock-report">
              <CommonDropdown dropdownItems={["Web designer", "Development", "Marketing"]} dropdownToggle="Category" />
              <CommonDropdown dropdownItems={["Web designer", "Development", "Marketing"]} dropdownToggle="View Stock" />
            </div>
          </div>
        </CardHeader>
        <CardBody className="p-0 stock-table custom-scrollbar">
          <DataTable className="custom-scrollbar" data={StockReportData} columns={StockReportColumns} />
        </CardBody>
      </Card>
    </Col>
  );
}
