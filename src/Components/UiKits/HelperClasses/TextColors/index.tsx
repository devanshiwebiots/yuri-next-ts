import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TextColorTitle } from "@/Constants";
import { TextColorsSubTitle } from "@/Data/UiKits/HelperClasses";
import { Card, CardBody, Col } from "reactstrap";

const TextColorsClass = () => {
  return (
    <Col xl="6">
      <Card className="height-equal title-line">
        <CommonCardHeader
          title={TextColorTitle}
          subTitle={TextColorsSubTitle}
        />
        <CardBody>
          <div className="helper-common-box" />
          <div className="font-primary">
            This is a <strong>font-primary </strong> text used class as
            .font-primary
          </div>
          <div className="helper-common-box" />
          <div className="font-secondary">
            This is a <strong>font-secondary </strong> text used class as
            .font-secondary
          </div>
          <div className="helper-common-box" />
          <div className="font-success">
            This is a <strong>font-success </strong> text used class as
            .font-success
          </div>
          <div className="helper-common-box" />
          <div className="font-danger">
            This is a <strong>font-danger </strong> text used class as
            .font-danger
          </div>
          <div className="helper-common-box" />
          <div className="font-warning">
            This is a <strong>font-warning </strong> text used class as
            .font-warning
          </div>
          <div className="helper-common-box" />
          <div className="font-info">
            This is a <strong>font-info </strong> text used class as .font-info
          </div>
          <div className="helper-common-box" />
          <div className="font-dark">
            This is a <strong>font-dark </strong> text used class as .font-dark
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TextColorsClass;
