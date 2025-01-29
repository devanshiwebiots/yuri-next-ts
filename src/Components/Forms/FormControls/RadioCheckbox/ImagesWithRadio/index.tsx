import { Card, CardBody, Col, Row } from "reactstrap";
import { ImagesWitRadio } from "@/Constants";
import CustomImagesWithRadio from "./CustomImagesWithRadio";
import DynamicImagesWithRadio from "./DynamicImagesWithRadio";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImageWithRadioData } from "@/Data/Forms";

const ImagesWithRadio = () => {
    return (
        <Col sm="12">
          <Card>
            <CommonCardHeader title={ImagesWitRadio} subTitle={ImageWithRadioData} />
            <CardBody>
              <div className="main-img-checkbox">
                <Row className="g-3">
                  <CustomImagesWithRadio />
                  <DynamicImagesWithRadio />
                </Row>
              </div>
            </CardBody>
          </Card>
        </Col>
      );
}

export default ImagesWithRadio