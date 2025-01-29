import { Card, CardBody, Col } from "reactstrap";
import CommonCardFooter from "../Common/CommonCardFooter";
import { HorizontalStyles } from "@/Constants";
import HorizontalStyleForm from "./HorizontalStyleForm";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { HorizontalStyleData } from "@/Data/Forms";

const HorizontalStyle = () => {
  return (
    <Col sm="12" xxl="6" className="box-col-12">
      <Card className="height-equal">
        <CommonCardHeader title={HorizontalStyles} subTitle={HorizontalStyleData} />
        <CardBody>
          <HorizontalStyleForm />
        </CardBody>
        <CommonCardFooter footerClass="text-end" color1="primary" btn1Class='m-r-15' color2="light" />
      </Card>
    </Col>
  )
};

export default HorizontalStyle;
