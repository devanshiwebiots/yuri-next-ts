import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { BasicRadioAndCheckboxs } from "@/Constants";
import { SimpleCheckboxs } from "./SimpleCheckboxs";
import { SimpleRadio } from "./SimpleRadio";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicRadioCheckboxData } from "@/Data/Forms";

const BasicRadioAndCheckbox = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={BasicRadioAndCheckboxs} subTitle={BasicRadioCheckboxData} />
        <CardBody className="mb-4">
          <Row className="g-3">
            <SimpleCheckboxs />
            <SimpleRadio />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicRadioAndCheckbox;
