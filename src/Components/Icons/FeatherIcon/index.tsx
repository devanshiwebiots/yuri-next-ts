import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Card, Col, Container, Row } from "reactstrap";
import { FeatherIconCardBody } from "./FeatherIconCardBody";
import { FeatherIcon } from "@/Constants";

const FeatherIconContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CommonCardHeader title={FeatherIcon} />
            <FeatherIconCardBody />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FeatherIconContainer;
