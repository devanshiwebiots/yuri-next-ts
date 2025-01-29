import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { HorizontalAlignment } from "@/Constants";
import { HorizontalAlignmentSubTitle } from "@/Data/UiKits/Grid";
import { Card, CardBody, CardFooter, Col, Row, Table } from "reactstrap";

const HorizontalAlignmentCard = () => {
  return (
    <Col sm="12">
      <Card className="title-line">
        <CommonCardHeader
          title={HorizontalAlignment}
          subTitle={HorizontalAlignmentSubTitle}
        />
        <CardBody className="grid-showcase grid-align">
          <Row className="justify-content-start bg-light">
            <Col xs="5">
              <span className="bg-white text-dark">One column</span>
            </Col>
            <Col xs="4">
              <span className="bg-white text-dark">Two column</span>
            </Col>
          </Row>
          <Row className="justify-content-center bg-light">
            <Col xs="4">
              <span className="bg-white text-dark">One column</span>
            </Col>
            <Col xs="4">
              <span className="bg-white text-dark">Two column</span>
            </Col>
          </Row>
          <Row className="justify-content-end bg-light">
            <Col xs="4">
              <span className="bg-white text-dark">One column</span>
            </Col>
            <Col xs="4">
              <span className="bg-white text-dark">Two column</span>
            </Col>
          </Row>
        </CardBody>
        <CardFooter>
          <Table className="w-100" responsive>
            <tbody>
              <tr>
                <th> Class</th>
                <th>Value of the class</th>
              </tr>
              <tr>
                <td>
                  <code>.justify-content-*</code>
                </td>
                <td> start / center / end / around / between</td>
              </tr>
            </tbody>
          </Table>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default HorizontalAlignmentCard;
