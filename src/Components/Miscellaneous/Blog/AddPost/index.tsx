import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BlogDiscardButton, BlogPostButton, PostEdit } from "@/Constants";
import React from "react";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import { FormPost } from "./FormPost";
import DropzoneClass from "./DropzoneClass";

const AddPostContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CommonCardHeader title={PostEdit} />
            <CardBody className="add-post primary-dropzone">
              <FormPost />
              <DropzoneClass />
              <div className="btn-showcase text-end">
                <Button color="primary">{BlogPostButton}</Button>
                <Button color="light" type="reset" className="ms-2">{BlogDiscardButton}</Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddPostContainer;
