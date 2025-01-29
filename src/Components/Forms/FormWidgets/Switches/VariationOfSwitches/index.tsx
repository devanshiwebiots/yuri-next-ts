import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { VariationOfSwitche } from "@/Constants";
import { VariationOfSwitcheOne } from "./VariationOfSwitcheOne";
import { VariationOfSwitcheTwo } from "./VariationOfSwitcheTwo";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { VariationSwitchData } from "@/Data/Forms";

const VariationOfSwitches = () => {
  return (
    <Col md="6">
      <Card className="title-line">
        <CommonCardHeader title={VariationOfSwitche} subTitle={VariationSwitchData} />
        <CardBody className="common-flex">
          <ul className="tg-list common-flex">
            <VariationOfSwitcheOne />
            <VariationOfSwitcheTwo />
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VariationOfSwitches;
