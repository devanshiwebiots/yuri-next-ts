import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ButtonsWithDropdown, ButtonsWithDropdownTitle } from "@/Constants";
import { ButtonWithDropForth, ButtonWithDropOne, ButtonWithDropThird, ButtonWithDropTwo, ButtonWithDropdownData } from "@/Data/Forms";
import { Card, CardBody, Col, Input, InputGroup } from "reactstrap";
import ButtonDropdownList from "./Common/ButtonDropdownList";

const ButtonsWithDropdowns = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={ButtonsWithDropdown} subTitle={ButtonWithDropdownData} />
        <CardBody className="main-custom-form card-wrapper input-group-wrapper">
          <InputGroup>
            <ButtonDropdownList color="info" outline={true} title={ButtonsWithDropdownTitle} divider={true} options={ButtonWithDropOne} />
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <Input type="text" />
            <ButtonDropdownList color="danger" outline={true} title={ButtonsWithDropdownTitle} divider={true} options={ButtonWithDropTwo} />
          </InputGroup>
          <InputGroup>
            <ButtonDropdownList color="primary" title={ButtonsWithDropdownTitle} divider={true} options={ButtonWithDropThird} />
            <Input type="text" />
            <ButtonDropdownList color="warning" title={ButtonsWithDropdownTitle} divider={true} options={ButtonWithDropForth} />
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ButtonsWithDropdowns;
