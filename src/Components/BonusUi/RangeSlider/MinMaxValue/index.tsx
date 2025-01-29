import { Card, CardBody, Col } from "reactstrap";
import { MinMaxValues } from "@/Constants";
import MinMaxValueForm from "./MinMaxValueForm";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DefaultRangeSubTitle } from "@/Data/BonusUi/RangeSlider";

const MinMaxValue = () => {
  return (
    <Col lg="6">
      <Card className="title-line">
        <CommonCardHeader title={MinMaxValues} subTitle={DefaultRangeSubTitle} />
        <CardBody>
          <MinMaxValueForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MinMaxValue;
