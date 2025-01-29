import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { MultiFileUploads } from "@/Constants";
import { FileUploadData } from "@/Data/BonusUi/Dropzone";
import { Card, CardBody, Col } from "reactstrap";
import CommonFileUpload from "./Common/CommonFileUpload";

const MultiFileUpload = () => {
  return (
    <Col lg="6">
      <Card className="title-line dropzone-secondary">
        <CommonCardHeader title={MultiFileUploads} span={FileUploadData} />
        <CommonFileUpload multiple />
      </Card>
    </Col>
  );
};

export default MultiFileUpload;
