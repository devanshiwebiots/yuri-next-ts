import { Container, Row } from "reactstrap";
import ImagePreview from "./ImagePreview";
import SingleFileupload from "./SingleFileupload";
import MultiFileUpload from "./MultiFileUpload";
import DefaultDropzone from "./DefaultDropzone";

const DropzoneContainer = () => {
  return (
    <Container fluid>
      <Row>
        <DefaultDropzone />
        <ImagePreview/>
        <SingleFileupload/>
        <MultiFileUpload/>
      </Row>
    </Container>
  );
};

export default DropzoneContainer;
