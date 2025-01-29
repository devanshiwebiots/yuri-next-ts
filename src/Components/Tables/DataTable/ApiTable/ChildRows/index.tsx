import DataTable from "react-data-table-component";
import { Card, CardBody, Col, Input, Label } from "reactstrap";
import { ChildrenRowsTitle, SearchTableButton } from "@/Constants";
import CustomExpandableComponent from "./CustomExpandableComponent";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ChildRowColumn, ChildRowData } from "@/Data/Table/DataTable/ChildRowsData";
import { ZeroConfigurationData } from "@/Data/Table/DataTable/ZeroConfiguration";
import { useMemo, useState } from "react";

const ChildRows = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = ZeroConfigurationData.filter((item) =>item.office && item.office.toLowerCase().includes(filterText.toLowerCase()));
  
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="API-chield-row_filter" className="dataTables_filter d-flex align-items-center">
        <Label className="me-2">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);
  
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={ChildrenRowsTitle} subTitle={ChildRowData} />
        <CardBody>
          <div className="table-responsive">
            <div id="API-chield-row">
              <DataTable className="display border custom-scrollbar" data={filteredItems} columns={ChildRowColumn} pagination expandableRows expandableRowsComponent={CustomExpandableComponent} striped  highlightOnHover subHeader subHeaderComponent={subHeaderComponentMemo}/>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ChildRows;
