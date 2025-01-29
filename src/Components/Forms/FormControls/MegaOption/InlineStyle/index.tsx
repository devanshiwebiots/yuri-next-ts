import { Card, CardBody, Col } from "reactstrap";
import CommonCardFooter from "../Common/CommonCardFooter";
import { InlineStyles } from "@/Constants";
import InlineStyleForm from "./InlineStyleForm";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { InlineStyeData } from "@/Data/Forms";

const InlineStyle = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={InlineStyles} subTitle={InlineStyeData} />
        <CardBody className="megaoptions-border-space-sm">
          <InlineStyleForm />
        </CardBody>
        <CommonCardFooter footerClass="text-end" color1="warning" color2="light-warning" btn2Class='list-light-warning' />
      </Card>
    </Col>
  )
};

export default InlineStyle;
