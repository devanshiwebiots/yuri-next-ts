import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CVC, CVVNumber, CardNumber, DebitCards, ExpirationDate, FullNameHere, Submit } from "@/Constants";
import { Button, Card, CardBody, Col, Form, FormGroup, Label, Row } from "reactstrap";
import FormGroupCommon from "./Common/FormGroupCommon";
import SelectCommon from "./Common/SelectCommon";
import { DebitMonthSelect, DebitYearSelect } from "@/Data/Ecommerce";

const DebitCard = () => {
  return (
    <Col xxl="4" lg="6" className="box-col-6 debit-card">
      <Card>
        <CommonCardHeader title={DebitCards} headClass="py-4" />
        <CardBody>
          <Form className="theme-form e-commerce-form" onSubmit={(e) => e.preventDefault()}>
            <Row>
              <FormGroupCommon type="text" placeholder={FullNameHere} formClass="col-6 p-r-0" />
              <FormGroupCommon type="text" placeholder={CardNumber} formClass="col-6" />
              <FormGroupCommon type="text" placeholder={CVVNumber} formClass="col-6 p-r-0" />
              <FormGroupCommon type="text" placeholder={CVC} formClass="col-6" />
              <FormGroup>
                <Col xs="12">
                  <Label className="col-form-label" check>
                    {ExpirationDate}
                  </Label>
                </Col>
              </FormGroup>
              <SelectCommon size={1} data={DebitMonthSelect} selectClass="col-6 p-r-0" />
              <SelectCommon size={1} data={DebitYearSelect} selectClass="col-6" />
            </Row>
            <Col xs="12">
              <Button color="primary">{Submit}</Button>
            </Col>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DebitCard;
