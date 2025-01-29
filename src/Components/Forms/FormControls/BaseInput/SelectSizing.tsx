import { Card, CardBody, Col, Input } from "reactstrap";
import { SelectSizings } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SizingFormData, SizingFormDataList } from "@/Data/Forms";

const SelectSizing = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={SelectSizings} subTitle={SizingFormData} />
        <CardBody>
          <Input bsSize="sm" type="select" name="select">
            {SizingFormDataList.map((item, index) => (
              <option value={index + 1} key={index}>{item}</option>
            ))}
          </Input>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SelectSizing;
