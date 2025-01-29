import { Card, CardBody, Col } from "reactstrap";
import { Disable } from "@/Constants";
import DisabledForm from "./DisabledForm";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DisabledSliderSubTitle } from "@/Data/BonusUi/RangeSlider";

const Disabled = () => {
  return (
    <Col lg="6">
      <Card className="title-line">
        <CommonCardHeader title={Disable} subTitle={DisabledSliderSubTitle}/>
        <CardBody>
          <DisabledForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Disabled;
