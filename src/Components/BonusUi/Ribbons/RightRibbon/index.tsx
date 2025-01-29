import { Card, CardBody, Col, Row } from "reactstrap";
import { StaticRightRibbons } from "./StaticRightRibbons";
import { DynamicRightRibbons } from "./DynamicLeftRibbons";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { VariationsOfRightRibbons } from "@/Constants";
import { RightRibbonData } from "@/Data/BonusUi/Ribbons";

const  RightRibbons = () => {
  return (
    <Row>
      <Col sm="12" xl="12">
        <Card className="title-line">
          <CommonCardHeader title={VariationsOfRightRibbons} subTitle={RightRibbonData} />
          <CardBody>
            <Row className="g-3">
              <StaticRightRibbons />
              <DynamicRightRibbons />
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default RightRibbons;
