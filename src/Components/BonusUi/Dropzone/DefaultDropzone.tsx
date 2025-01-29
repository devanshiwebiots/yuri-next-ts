import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DefaultFileUploads } from "@/Constants";
import { DefaultFileUpload } from "@/Data/BonusUi/Dropzone";
import React, { useState } from "react";
import { FilePond } from "react-filepond";
import { Card, CardBody, Col } from "reactstrap";

const DefaultDropzone = () => {
  const [files, setFiles] = useState([]);
  
  return (
    <Col lg="6">
      <Card className="title-line">
        <CommonCardHeader title={DefaultFileUploads} subTitle={DefaultFileUpload} />
        <CardBody>
          <FilePond files={files} onupdatefiles={() => setFiles} allowMultiple={true} maxFiles={1} labelIdle={'Drag & Drop your files or <span class="filepond--label-action text-danger text-decoration-none">Browse</span>'} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultDropzone;
