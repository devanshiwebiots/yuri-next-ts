import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LargeProgressBars } from "@/Constants";
import { LargeData, LargeProgressSubHeading } from "@/Data/UiKits/Progress";
import { Card, Col, Row } from "reactstrap";

const LargeProgress = () => {
  return (
    <Col xl="6">
      <Card className="height-equal title-line">
        <CommonCardHeader
          title={LargeProgressBars}
          subTitle={LargeProgressSubHeading}
        />
        <div className="card-body progress-showcase">
          <Row>
            <Col>
              <div className="progress lg-progress-bar">
                <div
                  className="progress-bar bg-parimary"
                  role="progressbar"
                  style={{ width: "25%" }}
                >
                  25%
                </div>
              </div>
              {LargeData.map((item, index) => (
                <div key={index} className="progress lg-progress-bar">
                  <div
                    className={`progress-bar bg-${item.color}`}
                    role="progressbar"
                    style={{ width: `${item.value}%` }}
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    {item.value}%
                  </div>
                </div>
              ))}
              {/* <div className="progress lg-progress-bar">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  50%
                </div>
              </div>
              <div className="progress lg-progress-bar">
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  75%
                </div>
              </div>
              <div className="progress lg-progress-bar">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  100%
                </div>
              </div> */}
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
};

export default LargeProgress;
