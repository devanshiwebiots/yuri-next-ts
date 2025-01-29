import { RowCreateCallBackSpan, SearchTableButton } from "@/Constants";
import { RowCreateCallColumn, RowCreateCallData, RowCreateCallList } from "@/Data/Table/DataTable/RowCreateCallbackData";
import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, CardHeader, Col, Input, Label } from "reactstrap";

const RowCreateCallback = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = RowCreateCallList.filter((item) =>item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="row_create_filter" className="dataTables_filter d-flex align-items-center">
        <Label className="me-1">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <Col sm="12">
      <Card>
        <CardHeader className="pb-0 card-no-border">
          <h2>{RowCreateCallBackSpan}</h2>
          {RowCreateCallData.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </CardHeader>
        <CardBody>
          <div className="table-responsive theme-scrollbar" id="row_create">
            <DataTable data={filteredItems} columns={RowCreateCallColumn} highlightOnHover striped pagination className="border custom-scrollbar display dataTable" subHeader subHeaderComponent={subHeaderComponentMemo}/>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RowCreateCallback;
