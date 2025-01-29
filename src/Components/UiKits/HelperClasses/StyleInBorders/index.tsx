import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { StyleInBorders } from "@/Constants";
import { StyleInBordersClassSubTitle } from "@/Data/UiKits/HelperClasses";
import { Card, CardBody, Col, Row } from "reactstrap";
import BorderColor from "./BorderColor";
import BorderWidth from "./BorderWidth";
import CustomBorderRadius from "./CustomBorderRadius";
import TextColors from "./TextColors";

const StyleInBordersClass = () => {
  return (
    <Col xs="12">
      <Card className="title-line">
        <CommonCardHeader
          title={StyleInBorders}
          subTitle={StyleInBordersClassSubTitle}
        />
        <CardBody>
          <Row className="g-3">
            <CustomBorderRadius />
            <BorderColor />
            <BorderWidth />
            <TextColors />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StyleInBordersClass;
