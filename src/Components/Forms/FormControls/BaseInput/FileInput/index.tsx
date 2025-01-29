import { Card, CardBody, Col } from "reactstrap";
import { FileInputs, LargeFileInputExample, SmallFileInputExample } from "@/Constants";
import CommonFileInput from "./Common/CommonFileInput";
import { FileInputData, FileInputDataList } from "@/Data/Forms";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";

const FileInput = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={FileInputs} subTitle={FileInputData} />
        <CardBody>
          {FileInputDataList.map((item, index) => (
            <CommonFileInput label={item.label} multiple={item.multiple} disabled={item.disabled} key={index} />
          ))}
          <CommonFileInput label={SmallFileInputExample} size="sm" />
          <CommonFileInput label={LargeFileInputExample} size="lg" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default FileInput;
