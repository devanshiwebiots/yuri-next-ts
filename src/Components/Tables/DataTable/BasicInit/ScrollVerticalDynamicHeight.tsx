import { ScrollVerticalDynamicHeightTitle, SearchTableButton } from "@/Constants";
import { ScrollVertical1, ScrollVertical2, ScrollVerticalColumns, ScrollVerticalData } from "@/Data/Table/DataTable/ScrollVertical";
import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, Col, CardBody, CardHeader, Label, Input } from "reactstrap";

const ScrollVerticalDynamicHeight = () => {

  const [filterText, setFilterText] = useState("");

  const filteredItems = ScrollVerticalData.filter((item) =>item.title && item.title.toLowerCase().includes(filterText.toLowerCase()));
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="basic-12_filter" className="dataTables_filter d-flex align-items-center">
        <Label className="me-2">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <Col sm="12">
      <Card>
        <CardHeader className="pb-0 card-no-border">
          <h2>{ScrollVerticalDynamicHeightTitle}</h2>
          <p>{ScrollVertical1}</p>
          <p>{ScrollVertical2}</p>
        </CardHeader>
        <CardBody>
          <div className="table-responsive user-datatable">
            <DataTable data={filteredItems} columns={ScrollVerticalColumns} striped fixedHeader fixedHeaderScrollHeight="40vh" className="border display dataTable custom-scrollbar" subHeader subHeaderComponent={subHeaderComponentMemo} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ScrollVerticalDynamicHeight;
