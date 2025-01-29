import { CommonFormGroupProp } from "@/Types/Form";
import { Col, Input, Label, Row } from "reactstrap";

const CommonFormGroup: React.FC<CommonFormGroupProp> = ({ labelClass, label, colSm, colClass, inputType, placeholder, defaultValue, inputClass, max }) => {
  return (
    <Row className="mb-3 align-items-center">
      <Col sm="3">
        <Label className={`${labelClass}`} check>
          {label}
        </Label>
      </Col>
      <Col sm={colSm} className={colClass}>
        <Input type={inputType} className={inputClass} placeholder={placeholder} defaultValue={defaultValue} max={max} />
      </Col>
    </Row>
  );
};

export default CommonFormGroup;
