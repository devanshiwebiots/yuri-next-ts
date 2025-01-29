import { SearchTableButton } from "@/Constants";
import { CategoryPageTableData, CategoryPageTableDataColumn } from "@/Data/Ecommerce";
import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col, Container, Input, Label, Row } from "reactstrap";
import { CollapseFilterData } from "./CollapseFilterData";
import { ProductListFilterHeader } from "./ProductListFilterHeader";

const CategoryPageContainer = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = CategoryPageTableData.filter((item) => {
    return Object.values(item).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase()));
  });

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
          <Card>
            <CardBody>
              <div className="list-product-header">
                <ProductListFilterHeader />
                <CollapseFilterData />
              </div>
              <div className="list-product list-category">
              <div className="datatable-container ">
                <div className="table-responsive">
                  <DataTable className="datatable-table custom-scrollbar" data={filteredItems} columns={CategoryPageTableDataColumn} striped highlightOnHover pagination selectableRows subHeader subHeaderComponent={subHeaderComponentMemo} />
                </div>
              </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryPageContainer;
