import CommonFileUpload from "@/Components/BonusUi/Dropzone/Common/CommonFileUpload";
import { UploadProjectFiles } from "@/Constants";
import { Col, FormGroup, Label, Row } from "reactstrap";

const UploadProjectFile = () => {

  return (
    <Row>
      <Col>
        <FormGroup>
          <Label check>{UploadProjectFiles}</Label>
          <CommonFileUpload/>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default UploadProjectFile;
