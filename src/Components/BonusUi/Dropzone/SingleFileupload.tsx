import { SingleFileUploads } from "@/Constants";
import { FileUploadData } from "@/Data/BonusUi/Dropzone";
import { Card, CardBody, Col } from "reactstrap";
import CommonFileUpload from "./Common/CommonFileUpload";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";

const SingleFileUpload = () => {
  return (
    <Col lg="6">
      <Card className="title-line default-dropzone">
        <CommonCardHeader title={SingleFileUploads} span={FileUploadData} />
          <CommonFileUpload />
      </Card>
    </Col>
  );
};

export default SingleFileUpload;
