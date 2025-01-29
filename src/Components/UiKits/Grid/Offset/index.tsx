import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Offsets } from "@/Constants";
import { OffsetSubTitle } from "@/Data/UiKits/Grid";
import { Card, CardBody, CardFooter, Col, Row, Table } from "reactstrap";

const OffsetCard = () => {
  return (
    <Col sm="12">
      <Card className="title-line">
        <CommonCardHeader title={Offsets} subTitle={OffsetSubTitle} />
        <CardBody className="grid-showcase">
          <Row className="g-2">
            <Col sm="5" xs="4" className="offset-sm-3 offset-2">
              <span>col-5 offset-3</span>
            </Col>
            <Col sm="2" xs="4" className="offset-sm-2 offset-1">
              <span>col-2 offset-2</span>
            </Col>
            <Col sm="4" xs="5" className="offset-2">
              <span>col-4 offset-2</span>
            </Col>
            <Col sm="3" xs="4" className="offset-sm-2 offset-1">
              <span>col-3 offset-2</span>
            </Col>
          </Row>
        </CardBody>
        <CardFooter>
          <div className="table-responsive">
            <Table className="w-100">
              <tbody>
                <tr>
                  <th> Class</th>
                  <th>Value of the class</th>
                </tr>
                <tr>
                  <td>
                    <code>.offset-*</code>
                  </td>
                  <td> 1 / 2 / ... / 11 / 12</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default OffsetCard;
