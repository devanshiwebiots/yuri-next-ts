import { Col } from "reactstrap";

const TextColors = () => {
  return (
    <Col xxl="3" sm="6">
      <div className="border-wrapper light-background h-100 dark-helper">
        <h4 className="mb-3">Text colors</h4>
        <div className="helper-common-box">
          <div className="helper-box helper-text border txt-primary">C </div>
          <span>.txt-primary</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box helper-text border txt-secondary">C </div>
          <span>.txt-secondary</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box helper-text border txt-success">C </div>
          <span>.txt-success</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box helper-text border txt-danger">C </div>
          <span>.txt-danger</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box helper-text border txt-warning">C </div>
          <span>.txt-warning</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box helper-text border txt-info">C </div>
          <span>.txt-info</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box helper-text border txt-dark">C </div>
          <span>.txt-dark</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box helper-text border txt-light bg-dark">
            C{" "}
          </div>
          <span>.txt-light</span>
        </div>
      </div>
    </Col>
  );
};

export default TextColors;
