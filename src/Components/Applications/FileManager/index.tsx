import { Container, Row } from "reactstrap";
import LeftFileManager from "./LeftFileManager";
import RightFileManager from "./RightFileManager";

const FileManagerContainer = () => {
  return (
    <Container fluid>
      <Row>
        <LeftFileManager />
        <RightFileManager />
      </Row>
    </Container>
  );
};

export default FileManagerContainer;
