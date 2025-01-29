import { Card, Col } from "reactstrap";
import { CustomColorHoverStrippedTitle } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CustomColorHoverBody, CustomColorHoverData, CustomColorHoverHead } from "@/Data/Table/ReactstrapTable/BasicTable";
import CommonTable from "./Common/CommonTable";

export const CustomColorHoverStripped=()=> {
  return (
    <Col sm="12">
      <Card className="title-line">
        <CommonCardHeader title={CustomColorHoverStrippedTitle} subTitle={CustomColorHoverData} />
        <CommonTable strip hover mainTableClass="bg-primary" headClass="tbl-strip-thad-bdr" headData={CustomColorHoverHead}>
          {CustomColorHoverBody.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td>{data.title}</td>
              <td>{data.year}</td>
              <td>{data.studio}</td>
              <td>{data.budget}</td>
              <td>{data.boxOffice}</td>
            </tr>
          ))}
        </CommonTable>
      </Card>
    </Col>
  );
}
