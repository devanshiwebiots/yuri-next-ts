import { Formik } from "formik";
import { useState } from "react";
import { ValidationsForms } from "@/Constants";
import { Card, CardBody, Col } from "reactstrap";
import { FormValidations } from "./FormValidations";
import { FormValidationProp } from "@/Types/Form";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FormValidationSchema, ValidationFormData, ValidationFormInitialValue } from "@/Data/Forms";

const ValidationForm = () => {
  const [submitErrors, setSubmitError] = useState<boolean>(false);

  const handleSubmit = (values: FormValidationProp, { resetForm }: { resetForm: () => void }) => {
    resetForm();
    setSubmitError(false);
  };

  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={ValidationsForms} subTitle={ValidationFormData} />
        <CardBody>
          <Formik initialValues={ValidationFormInitialValue} onSubmit={handleSubmit} validationSchema={FormValidationSchema}>
            {({ errors }) => <FormValidations submitErrors={submitErrors} setSubmitError={setSubmitError} errors={errors} />}
          </Formik>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ValidationForm;
