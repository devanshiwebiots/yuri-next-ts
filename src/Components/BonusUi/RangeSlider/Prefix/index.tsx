import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Prefixes } from "@/Constants";
import { DefaultRangeSubTitle } from "@/Data/BonusUi/RangeSlider";
import { Card, CardBody, Col } from "reactstrap";
import PrefixForm from "./PrefixForm";

const Prefix = () => {
  return (
    <Col lg="6">
      <Card className="title-line">
        <CommonCardHeader title={Prefixes} subTitle={DefaultRangeSubTitle} />
        <CardBody className="mt-3 mb-3">
          <PrefixForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Prefix;
