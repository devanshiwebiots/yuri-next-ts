import { Card, Col, Form } from "reactstrap";
import { EdgesInputStyles } from "@/Constants";
import { EdgesInputCardBody } from "./EdgesInputCardBody";
import { EdgesInputCardFooter } from "./EdgesInputCardFooter";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { EdgeInputStyleData } from "@/Data/Forms";

const EdgesInputStyle = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={EdgesInputStyles} subTitle={EdgeInputStyleData} />
        <Form className="theme-form dark-inputs" onSubmit={(e) => e.preventDefault()}>
          <EdgesInputCardBody />
          <EdgesInputCardFooter />
        </Form>
      </Card>
    </Col>
  );
};

export default EdgesInputStyle;
