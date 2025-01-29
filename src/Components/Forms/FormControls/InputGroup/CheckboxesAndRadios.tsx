import { Card, CardBody, Col, Input, InputGroup, InputGroupText } from "reactstrap";
import { CheckboxesAndRadio } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CheckAndRadioData } from "@/Data/Forms";

const CheckboxesAndRadios = () => {
  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonCardHeader title={CheckboxesAndRadio} subTitle={CheckAndRadioData} />
        <CardBody className="checkbox-checked card-wrapper input-group-wrapper">
          <InputGroup>
            <InputGroupText>
              <Input className="mt-0" type="checkbox" />
            </InputGroupText>
            <Input type="text"/>
          </InputGroup>
          <InputGroup>
            <InputGroupText>
              <Input className="mt-0" type="radio" defaultChecked/>
            </InputGroupText>
            <Input type="text"/>
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  )
};

export default CheckboxesAndRadios;
