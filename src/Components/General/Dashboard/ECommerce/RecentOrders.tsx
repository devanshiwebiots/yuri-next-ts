import CommonDropdown from "@/CommonComponents/CommonDropdown";
import { Development, Marketing, WebDesigner } from "@/Constants";
import { RecentOrderColumns, RecentOrderData } from "@/Data/General/Dashboard/ECommerce";
import DataTable from "react-data-table-component";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

export default function RecentOrder() {
  return (
    <Col xl={9} md={8} className="col-xl-100 order-xl-ii">
      <Card className="height-equal title-line">
      <CardHeader className="card-no-border">
          <div className="header-top">
            <h2>
             Recent Orders
            </h2>
            <div className="card-header-right-icon">
              <CommonDropdown dropdownItems={[WebDesigner, Development, Marketing]} dropdownToggle="Generate Report" />
            </div>
          </div>
        </CardHeader>
        <CardBody className="project-datatable p-0 order-tables custom-scrollbar">
          <DataTable className="custom-scrollbar" data={RecentOrderData} columns={RecentOrderColumns} />
        </CardBody>
      </Card>
    </Col>
  );
}
