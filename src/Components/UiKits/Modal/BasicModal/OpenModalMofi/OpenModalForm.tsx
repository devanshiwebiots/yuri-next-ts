import React, { useState } from "react";
import { Button, Col, FormGroup, Label, ModalBody, Row } from "reactstrap";
import { Form, Formik, Field } from "formik";
import { EmailAddress, EnterYourFirstName, EnterYourLastName, FirstName, LastName, YuriEmail, SignUp, TermsAndCondition } from "@/Constants";
import { FormSubmitProp } from "@/Types/UiKits/Modal";
import { ModalFormSchema } from "@/Data/UiKits/Modal";


export const OpenModalForm: React.FC<FormSubmitProp> = ({ modal }) => {
  const [formSubmit, setFormSubmit] = useState(false);

  return (
    <ModalBody>
      <Formik initialValues={{ firstname: "", lastname: "", email: "" }} onSubmit={modal} validationSchema={ModalFormSchema}>
        {({ errors }) => (
          <Form className="g-3">
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label>{FirstName}</Label>
                  <Field type="text" name="firstname" className={`form-control ${formSubmit && `${errors.firstname ? "is-invalid" : "is-valid"}`}`} placeholder={EnterYourFirstName} />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>{LastName}</Label>
                  <Field type="text" name="lastname" className={`form-control ${formSubmit && `${errors.lastname ? "is-invalid" : "is-valid"}`}`} placeholder={EnterYourLastName} />
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup>
                  <Label>{EmailAddress}</Label>
                  <Field type="text" name="email" className={`form-control ${formSubmit && `${errors.lastname ? "is-valid" : "is-invalid"}`}`} placeholder={YuriEmail} />
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup check>
                  <Field className="form-check-input" type="checkbox" name="agree" />
                  <Label check className="text-success">{TermsAndCondition}</Label>
                </FormGroup>
                <Button color="primary" onClick={() => setFormSubmit(true)}>{SignUp}</Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </ModalBody>
  );
};
