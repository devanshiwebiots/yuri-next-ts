import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicProgressBars } from "@/Constants";
import { BasicData, BasicProgressSubHeading } from "@/Data/UiKits/Progress";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

const BasicProgress = () => {
  return (
    <Card className="title-line">
      <CommonCardHeader title={BasicProgressBars} subTitle={BasicProgressSubHeading} />
      <CardBody className="progress-showcase ">
        <Row>
          <Col>
            <Progress value="0" />
            {BasicData.map((element, index) => (
              <Progress key={index} color={element.color} value={element.value} >{element.value}%</Progress>
            ))}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default BasicProgress;
