import { Col } from "reactstrap";

const AdditiveBorder = () => {
  return (
    <Col xxl="4" sm="6">
      <div className="border-wrapper h-100 border additive-border">
        <h4 className="mb-3">Additive border </h4>
        <div className="helper-common-box">
          <div className="helper-box bg-light border" />
          <span>.border</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box bg-light border-top" />
          <span>.border-top</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box bg-light border-bottom" />
          <span>.border-bottom</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box bg-light border-start" />
          <span>.border-start</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box bg-light border-end" />
          <span>.border-end</span>
        </div>
      </div>
    </Col>
  );
};

export default AdditiveBorder;
