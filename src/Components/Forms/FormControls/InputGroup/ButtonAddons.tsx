import { Button, Card, CardBody, Col, Input, InputGroup } from "reactstrap";
import { AddonPlaceHolder, ButtonAddon, SubmitButtonAddon, SubmitButtonAddonPlaceHolder } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ButtonAddonData } from "@/Data/Forms";

const ButtonAddons = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={ButtonAddon} subTitle={ButtonAddonData}/>
        <CardBody className="card-wrapper input-group-wrapper">
          <InputGroup>
            <Button color='primary' outline id="button-addon1">{'$ 25'}</Button>
            <Input type="text" id="button-addon1"/>
          </InputGroup>
          <InputGroup>
            <Input type="text" placeholder={SubmitButtonAddonPlaceHolder} id="button-addon2"/>
            <Button color='primary' outline id="button-addon2">{SubmitButtonAddon}</Button>
          </InputGroup>
          <InputGroup>
            <Button color='primary'><span>&#8364; </span></Button>
            <Button color='success'>{'0.0114419'}</Button>
            <Input type="text"/>
          </InputGroup>
          <InputGroup>
            <Input type="text" placeholder={AddonPlaceHolder}/>
            <Button color='primary'><span>&#8377;</span></Button>
            <Button color='success'>{'500'}</Button>  
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  )
};

export default ButtonAddons;
