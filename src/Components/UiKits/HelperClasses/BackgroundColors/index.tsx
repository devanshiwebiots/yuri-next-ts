import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BackgroundColors } from "@/Constants";
import { BackgroundColorsSubTitle } from "@/Data/UiKits/HelperClasses";
import { Card, CardBody, Col, Row } from "reactstrap";
import DarkBackgrounds from "./DarkBackgrounds";
import ExtendedBackgrounds from "./ExtendedBackgrounds";
import LightBackgrounds from "./LightBackgrounds";

const BackgroundColorsClass = () => {
  return (
    <Col xs="12">
      <Card className="title-line">
        <CommonCardHeader
          title={BackgroundColors}
          subTitle={BackgroundColorsSubTitle}
        />
        <CardBody>
          <Row className="g-3">
            <DarkBackgrounds />
            <LightBackgrounds />
            <ExtendedBackgrounds />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BackgroundColorsClass;
