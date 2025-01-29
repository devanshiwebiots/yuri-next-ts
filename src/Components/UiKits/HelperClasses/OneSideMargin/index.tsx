import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import {
  MarginLeft,
  OnlyOneSideMargin,
  PaddingBottom,
  PaddingRight,
  PaddingTop,
} from "@/Constants";
import {
  OneSideMarginSubTitle,
  PaddingAndMarginData,
} from "@/Data/UiKits/HelperClasses";
import { Card, CardBody, Col, Row } from "reactstrap";

const OneSideMarginClass = () => {
  return (
    <Col xl="12">
      <Card className="height-equal title-line">
        <CommonCardHeader
          title={OnlyOneSideMargin}
          subTitle={OneSideMarginSubTitle}
        />
        <CardBody>
          <Row className="g-3">
            <Col xxl="3" sm="6">
              <div className="border-wrapper h-100 light-background dark-helper">
                <h4 className="mb-3">{MarginLeft}</h4>
                <div className="common-p-box">
                  {PaddingAndMarginData.map((item, index) => (
                    <span key={index}>.m-l-{item}</span>
                  ))}
                </div>
              </div>
            </Col>
            <Col xxl="3" sm="6">
              <div className="border-wrapper h-100 light-background dark-helper">
                <h4 className="mb-3">{PaddingRight}</h4>
                <div className="common-p-box">
                  {PaddingAndMarginData.map((item, index) => (
                    <span key={index}>.m-r-{item}</span>
                  ))}
                </div>
              </div>
            </Col>
            <Col xxl="3" sm="6">
              <div className="border-wrapper h-100 light-background dark-helper">
                <h4 className="mb-3">{PaddingTop}</h4>
                <div className="common-p-box">
                  {PaddingAndMarginData.map((item, index) => (
                    <span key={index}>.m-t-{item}</span>
                  ))}
                </div>
              </div>
            </Col>
            <Col xxl="3" sm="6">
              <div className="border-wrapper h-100 light-background dark-helper">
                <h4 className="mb-3">{PaddingBottom}</h4>
                <div className="common-p-box">
                  {PaddingAndMarginData.map((item, index) => (
                    <span key={index}>.m-b-{item}</span>
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

export default OneSideMarginClass;
