import { Card, CardBody, Col } from "reactstrap";
import { DefaultRangeSliders } from "@/Constants";
import { DefaultRangeSliderForm } from "./DefaultRangeSliderForm";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DefaultRangeSubTitle } from "@/Data/BonusUi/RangeSlider";

const DefaultRangeSlider = () => {
  return (
    <Col lg="6">
      <Card className="title-line">
        <CommonCardHeader title={DefaultRangeSliders} subTitle={DefaultRangeSubTitle}/>
        <CardBody>
          <DefaultRangeSliderForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultRangeSlider;
