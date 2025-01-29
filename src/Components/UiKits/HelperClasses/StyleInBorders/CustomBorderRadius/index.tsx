import React from "react";
import { Col } from "reactstrap";

const CustomBorderRadius = () => {
  return (
    <Col xxl='3' sm='6'>
      <div className="border-wrapper h-100 light-background dark-helper custom-border-radius">
        <h4 className="mb-3">Custom border-radius class</h4>
        <div className="helper-common-box">
          <div className="helper-box b-r-0 bg-light border" />
          <span>.b-r-0</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box b-r-1 bg-light border" />
          <span>.b-r-1</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box b-r-2 bg-light border" />
          <span>.b-r-2</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box b-r-3 bg-light border" />
          <span>.b-r-3</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box b-r-4 bg-light border" />
          <span>.b-r-4</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box b-r-5 bg-light border" />
          <span>.b-r-5</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box b-r-6 bg-light border" />
          <span>.b-r-6</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box b-r-7 bg-light border" />
          <span>.b-r-7</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box b-r-8 bg-light border" />
          <span>.b-r-8</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box b-r-9 bg-light border" />
          <span>.b-r-9</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box b-r-10 bg-light border" />
          <span>.b-r-10</span>
        </div>
      </div>
    </Col>
  );
};

export default CustomBorderRadius;
