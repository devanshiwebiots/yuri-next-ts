import { EnterDetails, Finish, Next, Previous, SignUpAccount } from "@/Constants";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { Button, Col, Container, Form, Input, Progress, Row } from "reactstrap";
import AddressForm from "./AddressForm";
import PersonalForm from "./PersonalForm";
import RegisterWizardList from "./RegisterWizardList";
import VerifyForm from "./VerifyForm";

export default function RegisterWizard() {
  const [level, setLevel] = useState(1);
  const [formValue, setFormValue] = useState({ firstName: "", lastName: "", contactNumber: "", email: "", password: "", confirmPassword: "", birthDate: "", country: "", state: "" });
  const [showFinish, setShowFinish] = useState(false);
  const handleBackButton = () => {
    setShowFinish(false);
    if (level === 2) {
      setLevel(level - 1);
    }
    if (level === 3) {
      setLevel(level - 1);
    }
  };
  const updateUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = event.target.value;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleNextButton = () => {
    const { firstName, lastName, contactNumber, email, password, confirmPassword, birthDate, state } = formValue;
    if (firstName !== "" && lastName !== "" && contactNumber !== "" && level === 1) {
      setLevel(level + 1);
    } else if (email !== "" && password !== "" && confirmPassword !== "" && level === 2) {
      setLevel(level + 1);
    } else if (state !== "" && birthDate !== "" && level === 3) {
      setShowFinish(true);
    } else {
      return toast.error("please fill all fields before jumping to next button");
    }
  };
  const handleFinish = () => {
    toast.success("Congratulation ! All step Done.");
  };
  const calculateProgressBarValue = () => {
    return level === 1 ? 15 : (level - 1) * 35;
  };
  return (
    <Container className="wizard-4" fluid>
      <Row>
        <Col lg={3} md={4} className="position-relative">
          <RegisterWizardList level={level} />
        </Col>
        <Col lg={9} md={8} className="p-0">
          <div className="step-container login-card">
            <div>
              <div className="wizard-title text-center">
                <h2>{SignUpAccount}</h2>
                <h5 className="text-muted mb-4">{EnterDetails}</h5>
              </div>
              <div className="login-main">
                <Progress value={calculateProgressBarValue()} />
                <Form className="theme-form">
                  <Input type="hidden" name="_token" value="iJquRbgH4Np4OcWzjk8Bd03CaexHzse7gz2vHrml" />
                  <div className="registration-content">
                    {level === 1 && <PersonalForm formValue={formValue} updateUserData={updateUserData} />}
                    {level === 2 && <AddressForm formValue={formValue} updateUserData={updateUserData} />}
                    {level === 3 && <VerifyForm formValue={formValue} updateUserData={updateUserData} />}
                  </div>
                  <div className="wizard-navigation mt-3">
                    <div>
                      {level > 1 && (
                        <Button color="primary" outline size="lg" onClick={handleBackButton}>
                          {Previous}
                        </Button>
                      )}
                    </div>
                    <div>
                      <Button color="primary" size="lg" className="text-center" onClick={showFinish ? handleFinish : handleNextButton}>
                        {showFinish ? Finish : Next}
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
