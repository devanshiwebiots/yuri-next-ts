import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Card, CardBody, Col, Table } from "reactstrap";
import { TableBody } from "./TableBody";
import TableHead from "./TableHead";
import { GridOptionsHeading, Href } from "@/Constants";
import { GridOptionsSubTitle } from "@/Data/UiKits/Grid";

const GridOptionsCard = () => {

  return (
    <Col sm="12">
      <Card className="title-line grid-option">
        <CommonCardHeader title={GridOptionsHeading} subTitle={GridOptionsSubTitle} />
        <CardBody>
          <div className="table-responsive custom-scrollbar">
            <Table bordered striped>
              <TableHead />
              <TableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GridOptionsCard;
