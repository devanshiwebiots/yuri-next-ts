import { Card, Col, Form } from "reactstrap";
import { BasicHtmlInputControls } from "@/Constants";
import { BasicHtmlCardBody } from "./BasicHtmlCardBody";
import { BasicHtmlCardFooter } from "./BasicHtmlCardFooter";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicHtmlInputControlData } from "@/Data/Forms";

const BasicHtmlInputControl = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={BasicHtmlInputControls} subTitle={BasicHtmlInputControlData} />
        <Form className="theme-form" onSubmit={(e)=>e.preventDefault()}>
          <BasicHtmlCardBody/>
          <BasicHtmlCardFooter/>
        </Form>
      </Card>
    </Col>
  );
};

export default BasicHtmlInputControl;
