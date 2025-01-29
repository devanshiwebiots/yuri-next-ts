import { Card, Col } from "reactstrap";
import { InverseTables } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { InverseTableBody, InverseTableData, InverseTableHead } from "@/Data/Table/ReactstrapTable/BasicTable";
import CommonTable from "./Common/CommonTable";

const InverseTable = () => {
  return (
    <Col sm="12">
      <Card className="title-line">
        <CommonCardHeader title={InverseTables} subTitle={InverseTableData} />
        <CommonTable tableClass="table-inverse" headData={InverseTableHead} headRowClass="border-bottom-light">
          {InverseTableBody.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.office}</td>
              <td>{data.position}</td>
              <td>{data.salary}</td>
              <td>{data.joinDate}</td>
              <td>{data.age}</td>
            </tr>
          ))}
        </CommonTable>
      </Card>
    </Col>
  );
};

export default InverseTable;
