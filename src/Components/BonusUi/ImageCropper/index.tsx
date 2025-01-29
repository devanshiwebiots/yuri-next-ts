import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImageCropper } from "@/Constants";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import ImageCropperBody from "./ImageCropperBody";

export default function ImageCropperContainer() {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card className="title-line">
            <CommonCardHeader title={ImageCropper} />
            <CardBody>
              <ImageCropperBody />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
