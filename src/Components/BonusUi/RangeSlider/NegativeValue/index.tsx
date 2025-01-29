import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { NegativeValues } from "@/Constants";
import { DefaultRangeSubTitle } from "@/Data/BonusUi/RangeSlider";
import { Card, CardBody, Col } from "reactstrap";
import NegativeValueForm from "./NegativeValueForm";

const NegativeValue = () => {
  return (
    <Col lg="6">
      <Card className="title-line">
        <CommonCardHeader title={NegativeValues} subTitle={DefaultRangeSubTitle} />
        <CardBody>
          <NegativeValueForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default NegativeValue;
