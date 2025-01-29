import { SearchTableButton } from "@/Constants";
import { ProductListTableData, ProductListTableDataColumn } from "@/Data/Ecommerce";
import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col, Container, Input, Label, Row } from "reactstrap";
import { CollapseFilterData } from "./CollapseFilterData";
import { ProductListFilterHeader } from "./ProductListFilterHeader";

const ProductListContainer = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = ProductListTableData.filter((item) => item.category && item.category.toLowerCase().includes(filterText.toLowerCase()));

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div className="dataTables_filter d-flex align-items-center">
        <Label className="me-2">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card className="product-list">
            <CardBody>
              <div className="list-product-header">
                <ProductListFilterHeader />
                <CollapseFilterData />
              </div>
              <div className="list-product">
                <div className="table-responsive">
                  <DataTable className="datatable-table custom-scrollbar" data={filteredItems} columns={ProductListTableDataColumn} striped highlightOnHover pagination selectableRows subHeader subHeaderComponent={subHeaderComponentMemo} />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListContainer;
