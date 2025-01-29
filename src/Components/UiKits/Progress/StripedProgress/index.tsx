import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ProgressBarsStriped } from "@/Constants";
import { StripedData, StripedProgressSubHeading } from "@/Data/UiKits/Progress";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

const StripedProgress = () => {
  return (
    <Col xl="6">
      <Card className="title-line">
        <CommonCardHeader
          title={ProgressBarsStriped}
          subTitle={StripedProgressSubHeading}
        />
        <CardBody className="progress-showcase ">
          <Row>
            <Col>
              <Progress color="primary" value="10" striped={true} />
              {StripedData.map((element, index) => (
                <Progress
                  key={index}
                  color={element.color}
                  value={element.value}
                  striped={true}
                />
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StripedProgress;
