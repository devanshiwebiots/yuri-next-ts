import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Order } from "@/Constants";
import { OrderSubTitle } from "@/Data/UiKits/Grid";
import { Card, CardBody, CardFooter, Col, Row, Table } from "reactstrap";

const OrderCard = () => {
  return (
    <Col sm="12">
      <Card className="title-line">
        <CommonCardHeader title={Order} subTitle={OrderSubTitle} />
        <CardBody className="grid-showcase">
          <Row className="g-2">
            <Col xs="3" className="order-3">
              <span>First Item (order-3)</span>
            </Col>
            <Col xs="5" className="order-first">
              <span>Second Item (order-first)</span>
            </Col>
            <Col xs="4" className="order-last">
              <span>Third Item (order-last)</span>
            </Col>
            <Col xs="3" className="order-2">
              <span>Fourth Item (order-2)</span>
            </Col>
            <Col sm="2" xs="4" className="order-5">
              <span>fifth Item (order-5)</span>
            </Col>
            <Col sm="6" xs="4" className="order-4">
              <span>sixth Item (order-4)</span>
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
                    <code>.order-*</code>
                  </td>
                  <td> first / 2 / 3 / 4 / 5 / last</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default OrderCard;
