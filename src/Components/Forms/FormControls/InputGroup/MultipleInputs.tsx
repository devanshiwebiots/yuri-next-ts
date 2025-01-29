import { Card, CardBody, Col, Input, InputGroup, InputGroupText } from "reactstrap";
import { FirstAndLastName, MultipleInput } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { MultipleInputData } from "@/Data/Forms";

const MultipleInputs = () => {
  return (
    <Col md="6">
    <Card>
      <CommonCardHeader title={MultipleInput} subTitle={MultipleInputData} />
      <CardBody className="common-flex main-custom-form card-wrapper">
        <InputGroup>
          <InputGroupText>{FirstAndLastName}</InputGroupText>
          <Input type="text" />
          <Input type="text" />
        </InputGroup>
        <InputGroup>
          <InputGroupText>{'$'}</InputGroupText>
          <InputGroupText>{'0.00'}</InputGroupText>
          <Input type="text" />
        </InputGroup>
        <InputGroup>
          <Input type="text" />
          <InputGroupText>{'$'}</InputGroupText>
          <InputGroupText>{'0.00'}</InputGroupText>
        </InputGroup>
      </CardBody>
    </Card>
  </Col>
  )
};

export default MultipleInputs;
