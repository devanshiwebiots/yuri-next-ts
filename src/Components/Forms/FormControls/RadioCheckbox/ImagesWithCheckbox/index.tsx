import { Card, CardBody, Col, Row } from "reactstrap";
import { ImagesWithCheckboxs } from "@/Constants";
import { DynamicImagesWithCheckbox } from "./DynamicImagesWithCheckbox";
import { CustomImagesWithCheckbox } from "./CustomImagesWithCheckbox";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImageWithCheckboxData } from "@/Data/Forms";

const ImagesWithCheckbox = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={ImagesWithCheckboxs} subTitle={ImageWithCheckboxData} />
        <CardBody>
          <div className="main-img-checkbox">
            <Row className="g-3">
              <CustomImagesWithCheckbox />
              <DynamicImagesWithCheckbox />
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImagesWithCheckbox;
