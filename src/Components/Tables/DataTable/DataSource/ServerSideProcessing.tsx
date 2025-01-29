import { SearchTableButton, ServerSideProcessingHeading } from "@/Constants";
import { ServerColumn, ServerData } from "@/Data/Table/DataTable/ServerSideData";
import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, CardHeader, Col, Input, Label } from "reactstrap";

const ServerSideProcessing = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = ServerData.filter((item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="data-source-4_filter" className="dataTables_filter d-flex align-items-center">
        <Label className="me-1">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <Col sm="12">
      <Card>
        <CardHeader className="card-header pb-0 card-no-border">
          <h2 className="mb-3">{ServerSideProcessingHeading}</h2>
          <p>There are many ways to get your data into DataTables, and if you are working with seriously large databases, you might want to consider using the server-side options that DataTables provides. With server-side processing enabled, all paging, searching, ordering actions that DataTables performs are handed off to a server where an SQL engine (or similar) can perform these actions on the large data set (after all, what the database engine is designed for!). As such, each draw of the table will result in a new Ajax request being made to get the required data.</p>
          <p>Server-side processing is enabled by setting the
            <code className="option" title="DataTables initialisation option">serverSide:option</code>option to <code>true</code> and providing an Ajax data source through the
            <code className="option" title="DataTables initialisation option">ajax:option</code>option.
          </p>
        </CardHeader>
        <CardBody>
          <div className="table-responsive">
            <DataTable className="border custom-scrollbar" data={filteredItems} columns={ServerColumn} striped highlightOnHover pagination subHeader subHeaderComponent={subHeaderComponentMemo} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ServerSideProcessing;
