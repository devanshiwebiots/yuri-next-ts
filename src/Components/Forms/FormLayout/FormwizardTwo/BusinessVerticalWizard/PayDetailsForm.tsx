import { ChangeEvent } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { AadharPlaceholder, AgreeToTermsAndConditions, CardHolder, CardNumber, Continue, Previous } from "@/Constants";
import { PayCardDetails } from "./PayCardDetails";
import { BusinessFormCommonProps } from "@/Types/Form";
import { useAppDispatch, useAppSelector } from "@/ReduxToolkit/Hooks";
import { setPayDetailsFormValues } from "@/ReduxToolkit/Reducers/FormWizardTwoSlice";
import { toast } from "react-toastify";

const PayDetailsForm :React.FC<BusinessFormCommonProps> = ({ callbackActive }) => {
  const { payDetailsFormValues } = useAppSelector((state) => state.formWizardTwo);
  const { cardHolderName, cardNumber, expiryDate, expiryYear, cvvNumber } = payDetailsFormValues;
  const dispatch = useAppDispatch();

  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(setPayDetailsFormValues({ ...payDetailsFormValues, [name]: value }));
  };

  const handleNextButton = () => {
    if (cardHolderName !== "" && cardNumber !== "" && expiryDate !== "" && expiryYear !== "" && cvvNumber !== "") callbackActive(5);
    toast.error("Please fill all field after press next button");
  };

  return (
    <Form onSubmit={(event) => event.preventDefault()} className="needs-validation" noValidate>
      <Row className="g-3">
        <Col md="6">
          <Label check>{CardHolder}</Label>
          <Input value={cardHolderName} name="cardHolderName" onChange={getUserData} type="text" />
        </Col>
        <Col md="6">
          <Label check>{CardNumber}</Label>
          <Input value={cardNumber} name="cardNumber" onChange={getUserData} type="text" placeholder={AadharPlaceholder} />
        </Col>
        <PayCardDetails getUserData={getUserData}/>
        <Col xs="12">
          <FormGroup check className="mb-0">
            <Input id="invalidCheckboxWizard" type="checkbox" className="checkbox-primary"/>
            <Label className="mb-0" htmlFor="invalidCheckboxWizard" check>{AgreeToTermsAndConditions}</Label>
          </FormGroup>
        </Col>
        <Col xs="12" className="text-end mt-3">
          <Button color="primary" onClick={() => callbackActive(3)}>{Previous}</Button>
          <Button className="ms-1" color="primary" onClick={handleNextButton}>{Continue}</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default PayDetailsForm;
