import DataTable from "react-data-table-component";
import { Card, CardBody, Col, Input, Label } from "reactstrap";
import { AjaxSourcedDataHeading, SearchTableButton } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AjaxSourceColumn, AjaxSourceData, AjaxSourceDataList } from "@/Data/Table/DataTable/DataSourceData";
import { useMemo, useState } from "react";

const AjaxSourcedData = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = AjaxSourceDataList.filter((item) =>item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="data-source-2_filter" className="dataTables_filter d-flex align-items-center">
        <Label className="me-1">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={AjaxSourcedDataHeading} subTitle={AjaxSourceData} headClass="pb-0 card-no-border" />
        <CardBody>
          <div className="table-responsive">
          <DataTable data={filteredItems} columns={AjaxSourceColumn} striped highlightOnHover pagination className="border custom-scrollbar display" subHeader subHeaderComponent={subHeaderComponentMemo}/>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AjaxSourcedData;
