import { Col, Label, Row } from "reactstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { AddTag } from "@/Constants";
import { MultiWithHeaderData } from "@/Data/Ecommerce";

const SelectTwo = () => {
  return (
    <Col sm="6">
      <Row className="g-2 product-tag">
        <Col xs="12">
          <Label className="d-block m-0" for="validationServer01" check>{AddTag}<span className="txt-danger"> *</span></Label>
        </Col>
        <Col xs="12">
          <Typeahead id="selecttwo" labelKey="name" options={MultiWithHeaderData} multiple />
          <p className="f-light">Products can be tagged</p>
        </Col>
      </Row>
    </Col>
  );
};

export default SelectTwo;
