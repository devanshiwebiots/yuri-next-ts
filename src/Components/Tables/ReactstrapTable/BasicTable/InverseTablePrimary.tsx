import { Card, Col } from "reactstrap";
import { InverseTablWithPrimaryBackgrounds } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { InverseTableWithBackgroundBody, InverseTableWithBackgroundData, InverseTableWithBackgroundHead } from "@/Data/Table/ReactstrapTable/BasicTable";
import CommonTable from "./Common/CommonTable";

export const InverseTablePrimary=()=> {
  return (
    <Col sm="12">
        <Card className="title-line">
         <CommonCardHeader title={InverseTablWithPrimaryBackgrounds} subTitle={InverseTableWithBackgroundData} />
         <CommonTable strip headData={InverseTableWithBackgroundHead} mainTableClass='bg-primary' headClass='tbl-strip-thad-bdr' >
            {InverseTableWithBackgroundBody.map((data) => (
              <tr key={data.id}>
                <th scope="row">{data.id}</th>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.company}</td>
                <td>{data.salary}</td>
                <td>{data.email}</td>
                <td>{data.position}</td>
                <td>{data.country}</td>
              </tr>
            ))}
         </CommonTable>
        </Card>
    </Col>
  )
}
