// import Dropzone from "react-dropzone-uploader";
import { Form } from "reactstrap";

const DropzoneClass = () => {
  const getUploadParams = () => {
    return { url: 'https://httpbin.org/post' };
  };

  return (
    <Form className='add-primary-post m-b-20'>
      {/* <Dropzone
        getUploadParams={getUploadParams}
        multiple={true}
        inputContent={
          <div className="m-0 dz-message needsclick">
            <i className="icon-cloud-up"></i>
            <h6 className="mb-0">{'Drop files here or click to upload.'}</h6>
          </div>}
      /> */}
    </Form>
  );
};

export default DropzoneClass;
