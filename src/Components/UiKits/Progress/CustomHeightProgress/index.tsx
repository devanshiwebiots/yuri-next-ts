import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CustomHeightProgressBars } from "@/Constants";
import { CustomData, CustomProgressSubHeading } from "@/Data/UiKits/Progress";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

const CustomHeightProgress = () => {
  return (
    <Card className="title-line">
      <CommonCardHeader
        subTitle={CustomProgressSubHeading}
        title={CustomHeightProgressBars}
      />
      <CardBody className="progress-showcase">
        <Row>
          <Col>
            <Progress
              color="primary"
              value="25"
              style={{ height: "1px" }}
              className="xs-progress-bar"
            />
            {CustomData.map((element, index) => (
              <Progress
                key={index}
                value={element.value}
                style={{ height: element.height }}
                color={element.color}
                className={element.name}
              />
            ))}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default CustomHeightProgress;
