import { Cancel, CreateTags, Save, TagColor, TagName } from "@/Constants";
import { CreateTagProp } from "@/Types/TaskType";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button, Col, Form, Input, Label, Modal, ModalBody, ModalHeader, Row } from "reactstrap";

const CreateTag: React.FC<CreateTagProp> = ({ tagCallback, tagModal, setTagModal }) => {
  const [validation, setValidation] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const tagToggle = () => tagCallback(false);
  const AddTag = () => {
    toast.success("Your Form Submitted");
    setTagModal(false);
  };

  return (
    <Modal fade className="modal-bookmark" isOpen={tagModal} toggle={tagToggle} size="lg">
      <ModalHeader>
        <h3 className="modal-title">{CreateTags}</h3>
        <Button close color="transparent" onClick={tagToggle}></Button>
      </ModalHeader>
      <ModalBody>
        <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(AddTag)}>
          <Row>
            <Col md="12" className="mb-3 mt-0">
              <Label check>{TagName}</Label>
              <Input className={`${validation && `${errors.name ? "is-invalid" : "is-valid"}`}`} type="text" {...register("name", { required: true })} />
            </Col>
            <Col md="12" className="mt-0">
              <Label check>{TagColor}</Label>
              <Input className={`${validation && `${errors.color ? "is-invalid" : "is-valid"}`} form-color`}type="color" {...register("color", { required: true })} defaultValue="#009DB5" />
            </Col>
          </Row>
          <Button color="secondary" className="me-1" type="submit" onClick={() => setValidation(true)}>
            {Save}
          </Button>
          <Button color="primary" onClick={tagToggle}>
            {Cancel}
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
export default CreateTag;
