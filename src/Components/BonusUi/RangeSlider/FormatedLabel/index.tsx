import { Card, CardBody, Col } from "reactstrap";
import { FormattedLabels } from "@/Constants";
import FormatedLabelForm from "./FormatedLabelForm";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DefaultRangeSubTitle } from "@/Data/BonusUi/RangeSlider";

const FormatedLabel = () => {
  return (
    <Col lg="6">
      <Card className="title-line">
        <CommonCardHeader title={FormattedLabels} subTitle={DefaultRangeSubTitle}/>
        <CardBody>
          <FormatedLabelForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default FormatedLabel;
