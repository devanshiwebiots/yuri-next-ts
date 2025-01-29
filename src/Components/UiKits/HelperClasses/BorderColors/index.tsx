import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BorderColor } from "@/Constants";
import { BorderColorsSubTitle } from "@/Data/UiKits/HelperClasses";
import { Card, CardBody, Col } from "reactstrap";
import BorderColor1 from "./BorderColor1";
import BorderColor2 from "./BorderColor2";

const BorderColorsClass = () => {
  return (
    <Col xs="12">
      <Card className="title-line">
        <CommonCardHeader subTitle={BorderColorsSubTitle} title={BorderColor} />
        <CardBody>
          <div className="gradient-border">
            <BorderColor1 />
            <BorderColor2 />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderColorsClass;
