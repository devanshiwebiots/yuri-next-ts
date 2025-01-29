import { Card, CardBody, Col } from "reactstrap";
import { DefaultStyleMegaOptions } from "@/Constants";
import  DefaultStyleForm  from "./DefaultStyleForm";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { MegaOptionDefaultData } from "@/Data/Forms";
import CommonCardFooter from "../Common/CommonCardFooter";

const DefaultStyle = () => {
  return (
    <Col sm="12" xxl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={DefaultStyleMegaOptions} subTitle={MegaOptionDefaultData} />
        <CardBody className="megaoptions-border-space-sm">
        <DefaultStyleForm />
        </CardBody>
        <CommonCardFooter footerClass='text-end' color1='primary' color2='light'/>
      </Card>
    </Col>
  );
};

export default DefaultStyle;
