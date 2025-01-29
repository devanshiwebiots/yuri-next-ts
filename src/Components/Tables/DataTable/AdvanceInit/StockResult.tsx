import { Card, CardBody, CardHeader, Col, Input, Label } from "reactstrap";
import DataTable from "react-data-table-component";
import { SearchTableButton, StockResultTitle } from "@/Constants";
import { StockResultColumn, StockResultData, StockResultList } from "@/Data/Table/DataTable/StockResultData";
import { useMemo, useState } from "react";

const StockResult = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = StockResultData.filter((item) =>item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="stock_filter" className="dataTables_filter d-flex align-items-center">
        <Label className="me-1">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <Col sm="12">
      <Card>
        <CardHeader className="pb-0 card-no-border">
          <h2>{StockResultTitle}</h2>
          {StockResultList.map((item, index) => (
            <p dangerouslySetInnerHTML={{ __html: item }} key={index} />
          ))}
        </CardHeader>
        <CardBody>
          <div className="table-responsive theme-scrollbar">
            <div id="stock_wrapper" className="dataTables_wrapper">
              <DataTable data={filteredItems} columns={StockResultColumn} striped fixedHeader fixedHeaderScrollHeight="50vh" className="border custom-scrollbar display dataTable" subHeader subHeaderComponent={subHeaderComponentMemo} />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StockResult;
