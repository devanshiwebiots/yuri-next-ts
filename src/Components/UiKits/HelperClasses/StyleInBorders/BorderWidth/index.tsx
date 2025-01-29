import { Col } from "reactstrap";

const BorderWidth = () => {
  return (
    <Col xxl="3" sm="6">
      <div className="border-wrapper h-100 light-background dark-helper">
        <h4 className="mb-3">Border-width</h4>
        <div className="helper-common-box">
          <div className="helper-box border-1 border"> </div>
          <span>.border-1</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box border-2 border"> </div>
          <span>.border-2</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box border-3 border"> </div>
          <span>.border-3</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box border-4 border"> </div>
          <span>.border-4</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box border-5 border"> </div>
          <span>.border-5</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box border-6 border"> </div>
          <span>.border-6</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box border-7 border"> </div>
          <span>.border-7</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box border-8 border"> </div>
          <span>.border-8</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box border-9 border"> </div>
          <span>.border-9</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box border-10 border"> </div>
          <span>.border-10 </span>
        </div>
      </div>
    </Col>
  );
};

export default BorderWidth;
