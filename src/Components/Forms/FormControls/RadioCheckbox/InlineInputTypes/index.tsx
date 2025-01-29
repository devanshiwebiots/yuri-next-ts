import { Card, CardBody, Col, Row } from "reactstrap";
import { InlineInputType } from "@/Constants";
import { InlineSwitche } from "./InlineSwitche";
import { InlineRadios } from "./InlineRadios";
import { InlineCheckboxs } from "./InlineCheckboxs";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { InlineInputData } from "@/Data/Forms";

const InlineInputTypes = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={InlineInputType} subTitle={InlineInputData} />
        <CardBody>
          <Row className="g-3">
            <InlineCheckboxs />
            <InlineRadios />
            <InlineSwitche />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InlineInputTypes;
