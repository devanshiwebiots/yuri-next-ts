import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ProgressBarsAnimated } from "@/Constants";
import { AnimatedData, AnimatedProgressSubHeading } from "@/Data/UiKits/Progress";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

const AnimatedProgress = () => {
  return (
    <Col xl='6'>
    <Card className="title-line">
      <CommonCardHeader title={ProgressBarsAnimated} subTitle={AnimatedProgressSubHeading} />
      <CardBody className="progress-showcase ">
        <Row>
          <Col>
            <Progress color="primary" value="10" animated={true} />
            {AnimatedData.map((element, index) => (
              <Progress key={index} color={element.color} value={element.value} animated={true} />
            ))}
          </Col>
        </Row>
      </CardBody>
    </Card>
    </Col> 
  );
};

export default AnimatedProgress
