import { Card, Col, Row } from "reactstrap";
import { ResponsiveLightBackgroundTitle } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ResponsiveLightBackgroundBody, ResponsiveLightBackgroundData, ResponsiveLightBackgroundHead } from "@/Data/Table/ReactstrapTable/BasicTable";
import CommonTable from "./Common/CommonTable";

export const ResponsiveLightBackground=()=> {
  return (
    <Col sm="12">
      <Card className="title-line light-table-bg">
        <CommonCardHeader title={ResponsiveLightBackgroundTitle} subTitle={ResponsiveLightBackgroundData} />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <CommonTable tableClass="light-card" headData={ResponsiveLightBackgroundHead}>
              {ResponsiveLightBackgroundBody.map((data) => (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.task}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.assign}</td>
                  <td>{data.date}</td>
                  <td>{data.price}</td>
                  <td className={`font-${data.color}`}>{data.status}</td>
                  <td>{data.progress}</td>
                </tr>
              ))}
            </CommonTable>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}
