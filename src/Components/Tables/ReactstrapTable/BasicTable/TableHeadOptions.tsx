import { Card, Col, Row } from "reactstrap";
import { TableHeadOption } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TableHeadOptionBody, TableHeadOptionData, TableHeadOptionHead } from "@/Data/Table/ReactstrapTable/BasicTable";
import CommonTable from "./Common/CommonTable";

export const TableHeadOptions=()=> {
  return (
    <Col sm="6">
      <Card className="title-line">
        <CommonCardHeader title={TableHeadOption} subTitle={TableHeadOptionData}/>
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <CommonTable headClass="table-dark" headData={TableHeadOptionHead}>
              {TableHeadOptionBody.map((data) => (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.userName}</td>
                </tr>
              ))}
            </CommonTable>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}
