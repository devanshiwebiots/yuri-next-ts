import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CustomFilteringSearch } from "@/Constants";
import { CustomFilteringList, FilteringTableColumn, FilteringTableData } from "@/Data/Table/DataTable/CustomFilteringData";
import { ChangeEvent, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";
import TableSearchBar from "./TableSearchBar";

const CustomFiltering = () => {
  const [data, setData] = useState(FilteringTableData);
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(100);

  useEffect(() => {
    const filteredData = FilteringTableData.filter((item) => {
      const age = item.age;
      return age >= minAge && age <= maxAge;
    });

    setData(filteredData);
  }, [minAge, maxAge]);

  const handleMinAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMinAge(parseInt(event.target.value, 10));
  };

  const handleMaxAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMaxAge(parseInt(event.target.value, 10));
  };

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={CustomFilteringSearch} subTitle={CustomFilteringList}  />
        <CardBody className="custom-filter-main">
          <TableSearchBar handleMinAgeChange={handleMinAgeChange} handleMaxAgeChange={handleMaxAgeChange}  />
          <div className="table-responsive user-datatable">
            <div id="datatable-range_wrapper" className="dataTables_wrapper">
              <DataTable className="border custom-scrollbar" data={data} columns={FilteringTableColumn} striped highlightOnHover pagination />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomFiltering;
