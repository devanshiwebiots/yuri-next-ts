import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { OnlyOneSidePadding } from "@/Constants";
import {
    OneSidePaddingSubTile,
    PaddingAndMarginData,
} from "@/Data/UiKits/HelperClasses";
import { Card, CardBody, Col, Row } from "reactstrap";

const OneSidePadding = () => {
  return (
    <Col xl="12">
      <Card className="height-equal title-line">
        <CommonCardHeader
          title={OnlyOneSidePadding}
          subTitle={OneSidePaddingSubTile}
        />
        <CardBody>
          <Row className=" g-3">
            <Col xxl="3" sm="6">
              <div className="border-wrapper h-100 light-background dark-helper">
                <h4 className="mb-3">Padding Left</h4>
                <div className="common-p-box">
                  {PaddingAndMarginData.map((item, index) => (
                    <span key={index}>.p-l-{item}</span>
                  ))}
                </div>
              </div>
            </Col>
            <Col xxl="3" sm="6">
              <div className="border-wrapper h-100 light-background dark-helper">
                <h4 className="mb-3">Padding Right</h4>
                <div className="common-p-box">
                  {PaddingAndMarginData.map((item, index) => (
                    <span key={index}>.p-r-{item}</span>
                  ))}
                </div>
              </div>
            </Col>
            <Col xxl="3" sm="6">
              <div className="border-wrapper h-100 light-background dark-helper">
                <h4 className="mb-3">Padding Top</h4>
                <div className="common-p-box">
                  {PaddingAndMarginData.map((item, index) => (
                    <span key={index}>.p-t-{item}</span>
                  ))}
                </div>
              </div>
            </Col>
            <Col xxl="3" sm="6">
              <div className="border-wrapper h-100 light-background dark-helper">
                <h4 className="mb-3">Padding Bottom</h4>
                <div className="common-p-box">
                  {PaddingAndMarginData.map((item, index) => (
                    <span key={index}>.p-b-{item}</span>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OneSidePadding;
