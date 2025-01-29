import React from "react";
import { Col } from "reactstrap";

const SubstractiveBorder = () => {
  return (
    <Col xxl='4' sm='6' >
      <div className="border-wrapper h-100 border subtractive-border">
        <h4 className="mb-3">Subtractive border</h4>
        <div className="helper-common-box">
          <div className="helper-box bg-light border border-0"> </div>
          <span>.border-0</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box bg-light border border-top-0"> </div>
          <span>.border-top-0</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box bg-light border border-end-0"> </div>
          <span>.border-end-0</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box bg-light border border-bottom-0"> </div>
          <span>.border-bottom-0</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box bg-light border border-start-0"> </div>
          <span>.border-start-0</span>
        </div>
      </div>
    </Col>
  );
};

export default SubstractiveBorder;
