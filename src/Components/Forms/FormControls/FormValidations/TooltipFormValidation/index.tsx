import { Card, CardBody, Col } from "reactstrap";
import { FormValidationTooltip } from "@/Constants";
import { Formik } from "formik";
import { TooltipValidationForm } from "./TooltipValidationForm";
import { useState } from "react";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TooltipInitialValue, TooltipValidationSchema, TooltipValidations } from "@/Data/Forms";
import { TooltipValidationProp } from "@/Types/Form";

const TooltipFormValidation = () => {
  const [submitErrors, setSubmitError] = useState<boolean>(false);

  const submitHandler = (values: TooltipValidationProp, { resetForm }: { resetForm: () => void }) => {
    resetForm();
    setSubmitError(false);
  };

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={FormValidationTooltip} subTitle={TooltipValidations} />
        <CardBody>
          <Formik initialValues={TooltipInitialValue} onSubmit={submitHandler} validationSchema={TooltipValidationSchema}>
            {({ errors }) => <TooltipValidationForm errors={errors} setSubmitError={setSubmitError} submitErrors={submitErrors} />}
          </Formik>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TooltipFormValidation;
