import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SmallProgressBars } from "@/Constants";
import { SmallData, SmallProgressSubHeading } from "@/Data/UiKits/Progress";
import { Card, CardBody, Col, Row } from "reactstrap";

const SmallProgress = () => {
  return (
    <Col xl="6">
      <Card className="height-equal title-line">
        <CommonCardHeader
          title={SmallProgressBars}
          subTitle={SmallProgressSubHeading}
        />
        <CardBody className="progress-showcase progress-b-space">
          <Row>
            <Col>
              <div className="progress sm-progress-bar overflow-visible mt-4">
                <div
                  className="progress-bar-animated small-progressbar bg-primary rounded-pill progress-bar-striped"
                  role="progressbar"
                  style={{ width: "30%" }}
                >
                  <span className="txt-primary progress-label">30 MB Data</span>
                  <span className="animate-circle" />
                </div>
              </div>
              {SmallData.map((item, index) => (
                <div key={index} className="progress sm-progress-bar overflow-visible mt-4">
                  <div
                    className={`progress-bar-animated small-progressbar bg-primary rounded-pill progress-bar-striped`}
                    role="progressbar"
                    style={{ width: `${item.value}%` }}
                  >
                    <span className="txt-primary progress-label">
                      {item.value} MB Data
                    </span>
                    <span className="animate-circle" />
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SmallProgress;
