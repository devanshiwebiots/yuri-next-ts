import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FontWeight } from "@/Constants";
import { FontWeightSubTitle } from "@/Data/UiKits/HelperClasses";
import { Card, CardBody, Col } from "reactstrap";

const FontWeightClass = () => {
  return (
    <Col xl="6">
      <Card className="card height-equal title-line">
        <CommonCardHeader title={FontWeight} subTitle={FontWeightSubTitle} />
        <CardBody>
          <div className="helper-common-box">
            <div className="f-w-100">
              You can set light font weight heading .f-w-100
            </div>
          </div>
          <div className="helper-common-box">
            <div className="f-w-300">
              You can set light font weight heading .f-w-300
            </div>
          </div>
          <div className="helper-common-box">
            <div className="f-w-400">
              You can set light font weight heading .f-w-400
            </div>
          </div>
          <div className="helper-common-box">
            <div className="f-w-600">
              You can set bolder font weight heading .f-w-600
            </div>
          </div>
          <div className="helper-common-box">
            <div className="f-w-700">
              You can set bold font weight heading .f-w-700
            </div>
          </div>
          <div className="helper-common-box">
            <div className="f-w-900">
              You can set bold font weight heading .f-w-900
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FontWeightClass;
