import { Card, CardBody, CardHeader, Col, Input, Label } from "reactstrap";
import { SearchTableButton, ZeroConfigurationHeading } from "@/Constants";
import { ZeroConfigurationColumn, ZeroConfigurationData } from "@/Data/Table/DataTable/ZeroConfiguration";
import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";

export const ZeroConfigurationTable = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = ZeroConfigurationData.filter((item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="basic-1_filter" className="dataTables_filter d-flex align-items-center">
        <Label className="me-2">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <Col sm="12">
      <Card>
        <CardHeader className="pb-0 card-no-border">
          <h2>{ZeroConfigurationHeading}</h2>
          <p>DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function:<code>$().DataTable();</code>.</p>
          <p>earching, ordering and paging goodness will be immediately added to the table, as shown in this example.</p>
        </CardHeader>
        <CardBody>
          <div className="table-responsive">
            <DataTable className="border custom-scrollbar" columns={ZeroConfigurationColumn} data={filteredItems} pagination subHeader subHeaderComponent={subHeaderComponentMemo} highlightOnHover striped persistTableHead />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
