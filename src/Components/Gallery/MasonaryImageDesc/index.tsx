import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { MasonryGalleryDescriptionCap } from "@/Constants";
import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import { MasonryGalleryWithDescriptionCardBody } from "./MasonryGalleryWithDescriptionCardBody";

const MasonaryImageDescContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12" className="box-col-12">
          <Card>
            <CommonCardHeader title={MasonryGalleryDescriptionCap} />
            <MasonryGalleryWithDescriptionCardBody />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MasonaryImageDescContainer;
