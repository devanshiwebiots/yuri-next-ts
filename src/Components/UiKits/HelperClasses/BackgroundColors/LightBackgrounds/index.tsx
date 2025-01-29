import React from "react";
import { Col } from "reactstrap";

const LightBackgrounds = () => {
  return (
    <Col xl="4" sm="6">
      <div className="border-wrapper h-100 border">
        <h4 className="mb-3">Light backgrounds</h4>
        <div className="helper-common-box">
          <div className="helper-box alert-light-primary"> </div>
          <span>.alert-light-primary </span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box alert-light-secondary" />
          <span>.alert-light-secondary</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box alert-light-success" />
          <span>.alert-light-success</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box alert-light-danger" />
          <span>.alert-light-danger</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box alert-light-warning" />
          <span>.alert-light-warning</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box alert-light-info" />
          <span>.alert-light-info</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box alert-light-dark" />
          <span>.alert-light-dark</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box alert-light-light" />
          <span>.light-background</span>
        </div>
      </div>
    </Col>
  );
};

export default LightBackgrounds;
