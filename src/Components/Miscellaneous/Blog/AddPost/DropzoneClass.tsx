import CommonFileUpload from "@/Components/BonusUi/Dropzone/Common/CommonFileUpload";
import { Form } from "reactstrap";

const DropzoneClass = () => {
   return (
    <Form className='add-primary-post m-b-20'>
      <CommonFileUpload/>
    </Form>
  );
};

export default DropzoneClass;
