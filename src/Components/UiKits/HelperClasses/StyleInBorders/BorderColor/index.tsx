import { Col } from "reactstrap";

const BorderColor = () => {
  return (
    <Col xxl="3" sm="6">
      <div className="border-wrapper h-100 light-background dark-helper">
        <h4 className="mb-3">Border color</h4>
        <div className="helper-common-box">
          <div className="helper-box border-primary border" />
          <span>.border-primary</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box border-secondary border" />
          <span>.border-secondary</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box border-success border" />
          <span>.border-success</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box border-danger border" />
          <span>.border-danger</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box border-warning border" />
          <span>.border-warning</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box border-info border" />
          <span>.border-info</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box border-dark border" />
          <span>.border-dark</span>
        </div>
      </div>
    </Col>
  );
};

export default BorderColor;
