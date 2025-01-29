import { BorderRights, EmailAddress, EmailAddressPlaceHolders } from "@/Constants";
import { BorderRightData, BorderRightText1 } from "@/Data/BonusUi/CreativeCard";
import { Card, CardBody, Col, Form, Input, Label } from "reactstrap";
import CommonCreativeCardHeader from "./Common/CommonCreativeCardHeader";

const BorderRight = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCreativeCardHeader headerClass="border-r-secondary" title={BorderRights} subTitle={BorderRightData} />
        <CardBody>
          <p>{BorderRightText1}</p>
          <Form>
            <Label>{EmailAddress}</Label>
            <Input type="email" placeholder={EmailAddressPlaceHolders} />
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderRight;
