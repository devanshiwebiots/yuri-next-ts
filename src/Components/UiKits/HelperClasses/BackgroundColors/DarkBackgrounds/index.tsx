import React from "react";
import { Col } from "reactstrap";

const DarkBackgrounds = () => {
  return (
    <Col xl="4" sm="6">
      <div className="border-wrapper h-100 border">
        <h4 className="mb-3">Dark background</h4>
        <div className="helper-common-box">
          <div className="helper-box bg-primary" />
          <span>.bg-primary </span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box bg-secondary" />
          <span>.bg-secondary </span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box bg-success" />
          <span>.bg-success </span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box bg-danger" />
          <span>.bg-danger </span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box bg-warning" />
          <span>.bg-warning </span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box bg-info" />
          <span>.bg-info </span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box bg-dark" />
          <span>.bg-dark </span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box bg-light" />
          <span>.bg-light </span>
        </div>
      </div>
    </Col>
  );
};

export default DarkBackgrounds;
