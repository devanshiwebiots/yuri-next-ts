import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Nesting } from "@/Constants";
import { NestingSubTitle } from "@/Data/UiKits/Grid";
import { Card, CardBody, Col, Row } from "reactstrap";

const NestingCard = () => {
  return (
    <Col sm="12">
      <Card className="title-line">
        <CommonCardHeader title={Nesting} subTitle={NestingSubTitle} />
        <CardBody className="grid-showcase">
          <Row className="g-3">
            <Col xs="3">
              <span>Level 1: .col-3</span>
            </Col>
            <Col xs="9">
              <div className="grid-wrapper pb-0">
                <Row className="g-2">
                  <Col xs="5">
                    <span className="border border-2">Level 2: .col-5</span>
                  </Col>
                  <Col xs="7">
                    <span className="border border-2">Level 2: .col-7</span>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs="8">
              <div className="grid-wrapper pb-0">
                <Row className="g-2">
                  <Col sm="2" xs="4">
                    <span className="border border-2">Level 1: .col-2</span>
                  </Col>
                  <Col sm="10" xs="8">
                    <span className="border border-2">Level 1: .col-10</span>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs="4">
              <span>Level 2: .col-4</span>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NestingCard;
