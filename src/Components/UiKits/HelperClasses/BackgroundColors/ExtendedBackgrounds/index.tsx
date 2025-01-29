import React from "react";
import { Col } from "reactstrap";

const ExtendedBackgrounds = () => {
  return (
    <Col xl="4" sm="12">
      <div className="border-wrapper h-100 border">
        <h4 className="mb-3">Extended background colors</h4>
        <div className="helper-common-box">
          <div className="helper-box light-card"> </div>
          <span>.light-card</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box light-background border" />
          <span>.light-background</span>
        </div>
      </div>
    </Col>
  );
};

export default ExtendedBackgrounds;
