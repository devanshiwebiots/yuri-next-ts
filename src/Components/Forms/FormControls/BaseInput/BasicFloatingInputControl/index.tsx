import { Card, Col, Form } from "reactstrap";
import { BasicFloatingInputControls } from "@/Constants";
import { BasicFloatingFooter } from "./BasicFloatingFooter";
import { BasicFloatingCardBody } from "./BasicFloatingCardBody";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FloatingInputData } from "@/Data/Forms";

const BasicFloatingInputControl = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={BasicFloatingInputControls} subTitle={FloatingInputData} />
        <Form className="theme-form" onSubmit={(e)=>e.preventDefault()}>
          <BasicFloatingCardBody/>
          <BasicFloatingFooter />
        </Form>
      </Card>
    </Col>
  );
};

export default BasicFloatingInputControl;
