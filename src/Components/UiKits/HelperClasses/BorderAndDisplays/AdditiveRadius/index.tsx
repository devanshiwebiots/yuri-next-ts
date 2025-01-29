import React from "react";
import { Col } from "reactstrap";

const AdditiveRadius = () => {
    
  return (
    <Col xl='4' sm='12'>
      <div className="border-wrapper h-100 border">
        <h4 className="mb-3">Additive radius</h4>
        <div className="helper-common-box">
          <div className="helper-radius radius-wrapper rounded" />
          <span>.rounded</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-radius radius-wrapper rounded-top" />
          <span>.rounded-top</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-radius radius-wrapper rounded-end" />
          <span>.rounded-end</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-radius radius-wrapper rounded-bottom" />
          <span>.rounded-bottom</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-radius radius-wrapper rounded-start" />
          <span>.rounded-start</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-radius radius-wrapper rounded-pill" />
          <span>.rounded-pill</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-radius radius-wrapper rounded-circle" />
          <span>.rounded-circle</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-radius radius-wrapper rounded-0" />
          <span>.rounded-0 </span>
        </div>
      </div>
    </Col>
  );
};

export default AdditiveRadius;
