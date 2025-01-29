import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ProgressWithNumberSteps } from "@/Constants";
import { WithNumberProgressSubTitle } from "@/Data/UiKits/Progress";
import { Button, Card, CardBody, Col } from "reactstrap";

const WithNumberProgress = () => {
  return (
    <Col xl="6">
      <Card className="title-line">
        <CommonCardHeader title={ProgressWithNumberSteps} subTitle={WithNumberProgressSubTitle} />
        <CardBody>
          <div className="position-relative m-3 progress-number">
            <div className="progress progress-wrapper">
              <div className="progress-bar" role="progressbar" aria-label="Progress" style={{ width: "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <Button size="sm" color="primary" className="position-absolute top-0 start-0 translate-middle rounded-circle">
              1
            </Button>
            <Button size="sm" color="primary" className="position-absolute top-0 start-50 translate-middle rounded-circle">
              2
            </Button>
            <Button size="sm" color="primary" className="progress-btn position-absolute top-0 start-100 translate-middle rounded-circle">
              3
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithNumberProgress;
