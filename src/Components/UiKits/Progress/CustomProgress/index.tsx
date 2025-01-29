import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CustomProgressBars } from "@/Constants";
import { CustomProgressBarsSubTitle } from "@/Data/UiKits/Progress";
import { Card, CardBody, Col, Row } from "reactstrap";

const CustomProgress = () => {
  return (
    <Card className="title-line">
      <CommonCardHeader
        title={CustomProgressBars}
        subTitle={CustomProgressBarsSubTitle}
      />
      <CardBody className="progress-showcase">
        <Row>
          <Col>
            <h6 className="mb-2">0% Getting Started </h6>
            <div className="progress mb-4">
              <div
                className="progress-bar-animated progress-bar-striped text-center"
                role="progressbar"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <h6 className="mb-2">30% Getting Uploading...</h6>
            <div className="progress mb-4">
              <div
                className="progress-bar-animated progress-bar-striped bg-primary text-center"
                role="progressbar"
                style={{ width: "30%" }}
                aria-valuenow={30}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                30%
              </div>
            </div>
            <h6 className="mb-2">60% Getting Pause...</h6>
            <div className="progress mb-4">
              <div
                className="progress-bar-animated progress-bar-striped bg-secondary text-center"
                role="progressbar"
                style={{ width: "60%" }}
                aria-valuenow={60}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                60%
              </div>
            </div>
            <h6 className="mb-2">70% Getting Uploading...</h6>
            <div className="progress mb-4">
              <div
                className="progress-bar-animated progress-bar-striped bg-success text-center"
                role="progressbar"
                style={{ width: "70%" }}
                aria-valuenow={70}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                70%
              </div>
            </div>
            <h6 className="mb-2">100% Completed</h6>
            <div className="progress">
              <div
                className="progress-bar-animated progress-bar-striped bg-dark text-center"
                role="progressbar"
                style={{ width: "100%" }}
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                100%
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default CustomProgress;
