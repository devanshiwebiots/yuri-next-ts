import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { VerticalAlignment } from "@/Constants";
import { VerticalAlignmentSubTitle } from "@/Data/UiKits/Grid";
import React from "react";
import { Card, CardBody, CardFooter, Col, Row, Table } from "reactstrap";

const VerticalAlignmentCard = () => {
  return (
    <Col sm="12">
      <Card className="title-line">
        <CommonCardHeader
          title={VerticalAlignment}
          subTitle={VerticalAlignmentSubTitle}
        />
        <CardBody className="grid-showcase mb-0">
          <div className="row">
            <Col lg="4">
              <Row className="grid-vertical align-items-start m-1 g-2 bg-light">
                <Col xs="6">
                  <span className="bg-white">one column</span>
                </Col>
                <Col xs="6">
                  <span className="bg-white">two column</span>
                </Col>
              </Row>
            </Col>
            <Col lg="4">
              <Row className="grid-vertical align-items-center m-1 g-2 bg-light">
                <Col xs="6">
                  <span className="bg-white">one column</span>
                </Col>
                <Col xs="6">
                  <span className="bg-white">two column</span>
                </Col>
              </Row>
            </Col>
            <Col lg="4">
              <Row className="grid-vertical align-items-end m-1 g-2 bg-light">
                <Col xs="6">
                  <span className="bg-white">one column</span>
                </Col>
                <Col xs="6">
                  <span className="bg-white">two column</span>
                </Col>
              </Row>
            </Col>
          </div>
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
                    <code>.align-items-*</code>
                  </td>
                  <td> start / center / end / baseline / stretch</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default VerticalAlignmentCard;
