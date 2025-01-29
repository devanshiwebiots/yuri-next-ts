import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BordersAndDisplays } from "@/Constants";
import { BorderAndDisplaysSubTitle } from "@/Data/UiKits/HelperClasses";
import { Card, CardBody, Col, Row } from "reactstrap";
import AdditiveBorder from "./AdditiveBorder";
import AdditiveRadius from "./AdditiveRadius";
import SubstractiveBorder from "./SubstractiveBorder";

const BorederAndDisplaysClass = () => {
  return (
    <Col xs="12">
      <Card className="title-line">
        <CommonCardHeader
          title={BordersAndDisplays}
          subTitle={BorderAndDisplaysSubTitle}
        />
        <CardBody>
          <Row className=" g-3">
            <AdditiveBorder />
            <SubstractiveBorder />
            <AdditiveRadius />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorederAndDisplaysClass;
