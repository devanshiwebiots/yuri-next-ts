import { UploadProjectFiles } from "@/Constants";
// import Dropzone, { IDropzoneProps } from "react-dropzone-uploader";
import { toast } from "react-toastify";
import { Col, FormGroup, Label, Row } from "reactstrap";

const UploadProjectFile = () => {
  // const getUploadParams = () => {
  //   return { url: "https://httpbin.org/post" };
  // };

  // const handleSubmit: IDropzoneProps["onSubmit"] = (allFiles) => {
  //   allFiles.forEach((f) => f.remove());
  //   toast.success("Dropzone successfully submitted !");
  // };

  // const Data = () => {
  //   return (
  //     <div className="dropzone-wrapper">
  //       <div className="dz-message needsclick">
  //         <i className="icon-cloud-up" />
  //         <h6>Drop files here or click to upload.</h6>
  //         <h6 className="note needsclick mt-1">
  //           (This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)
  //         </h6>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <Row>
      <Col>
        <FormGroup>
          <Label check>{UploadProjectFiles}</Label>
          {/* <Dropzone getUploadParams={getUploadParams} onSubmit={handleSubmit} maxFiles={1} inputContent={<Data />} /> */}
        </FormGroup>
      </Col>
    </Row>
  );
};

export default UploadProjectFile;
