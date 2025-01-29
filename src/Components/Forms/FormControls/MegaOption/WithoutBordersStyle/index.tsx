import { Card, CardBody, Col } from "reactstrap";
import CommonCardFooter from "../Common/CommonCardFooter";
import { WithoutBordersStyles } from "@/Constants";
import WithoutBordersStyleForm from "./WithoutBordersStyleForm";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { WithoutBorderData } from "@/Data/Forms";

const WithoutBordersStyle = () => {
  return (
    <Col sm="12" xxl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={WithoutBordersStyles} subTitle={WithoutBorderData} />
        <CardBody>
          <WithoutBordersStyleForm />
        </CardBody>
        <CommonCardFooter footerClass="text-end" color1="warning" color2="light-warning" btn2Class="list-light-warning"/>
      </Card>
    </Col>
  )
};

export default WithoutBordersStyle;
