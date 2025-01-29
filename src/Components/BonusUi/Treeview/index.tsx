import { Col, Container, Row } from "reactstrap";
import DisabledTree from "./DisabledTree";
import BasicTrees from "./BasicTrees";

const TreeViewContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="6">
          <BasicTrees />
        </Col>
        <Col sm="6">
          <DisabledTree />
        </Col>
      </Row>
    </Container>
  );
};

export default TreeViewContainer;
