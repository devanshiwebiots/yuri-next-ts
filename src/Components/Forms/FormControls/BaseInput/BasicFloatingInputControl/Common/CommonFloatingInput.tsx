import { CommonFloatingInputProp } from "@/Types/Form";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

const CommonFloatingInput: React.FC<CommonFloatingInputProp> = ({ inputType, label, floatingLabel, placeholder, defaultValue, height, invalid }) => {
  return (
    <Row className="mb-1">
      <Col sm="3">
        <Label check>{label}</Label>
      </Col>
      <Col sm="9">
        <FormGroup floating>
          <Input type={inputType} invalid={invalid} placeholder={placeholder} defaultValue={defaultValue} style={{ height: `${height}` }} />
          <Label check htmlFor="floatingInputValue">
            {floatingLabel}
          </Label>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default CommonFloatingInput;
