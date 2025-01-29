import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { MasonryGalleryCap } from "@/Constants";
import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import { MasonryGalleryBody } from "./MasonryGalleryBody";

const MasonaryGalleryContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12" className="box-col-12">
          <Card className="pb-5">
            <CommonCardHeader title={MasonryGalleryCap} />
            <MasonryGalleryBody />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MasonaryGalleryContainer;
