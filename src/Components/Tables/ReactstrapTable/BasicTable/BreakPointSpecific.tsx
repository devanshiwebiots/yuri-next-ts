import { Card, Col, Row } from "reactstrap";
import { BreckpointSpecifics } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BreakPointBody, BreakPointData, BreakPointHead } from "@/Data/Table/ReactstrapTable/BasicTable";
import CommonTable from "./Common/CommonTable";

export const BreakPointSpecific = () => {
  return (
    <Col sm="12">
      <Card className="title-line">
          <CommonCardHeader title={BreckpointSpecifics} subTitle={BreakPointData}/>
          <Row className="card-block">
            <Col sm="12" lg="12" xl="12">
              <CommonTable headData={BreakPointHead} mainTableClass="table-responsive-sm">
                {BreakPointBody.map((data) => (
                  <tr key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.orderId}</td>
                    <td>{data.price}</td>
                    <td>{data.quantity}</td>
                    <td>{data.total}</td>
                  </tr>
                ))}
              </CommonTable>
            </Col>
          </Row>
      </Card>
    </Col>
  );
};
