import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FontStyle } from "@/Constants";
import { FontStyleSubTitle } from "@/Data/UiKits/HelperClasses";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";

const FontStylesClass = () => {
  return (
    <Col xl="6">
      <Card className="height-equal title-line">
        <CommonCardHeader title={FontStyle} subTitle={FontStyleSubTitle} />
        <CardBody>
          <p className="f-s-normal">
            This is a <strong>.f-s-normal</strong> font-style{" "}
          </p>
          <p className="f-s-italic">
            This is a <strong>.f-s-italic</strong> font-style{" "}
          </p>
          <p className="f-s-oblique">
            This is a <strong>.f-s-oblique</strong> font-style{" "}
          </p>
          <p className="f-s-initial">
            This is a <strong>.f-s-initial</strong> font-style{" "}
          </p>
          <p className="f-s-inherit">
            This is a <strong>.f-s-inherit</strong> font-style{" "}
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FontStylesClass;
