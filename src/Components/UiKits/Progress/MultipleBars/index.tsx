import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { MultipleBars } from "@/Constants";
import { MultiBarsData, MultiBarsSubHeading } from "@/Data/UiKits/Progress";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

const MultiBars = () => {
  return (
    <Col xl="6">
      <Card className="title-line">
        <CommonCardHeader title={MultipleBars} subTitle={MultiBarsSubHeading} />
        <CardBody className="progress-showcase ">
          <Row>
            <Col>
              {MultiBarsData.map((element, index) => (
                <Progress key={index} multi>
                  {element.data.map((element, index) => (
                    <Progress
                      key={index}
                      bar
                      color={element.color}
                      value={element.value}
                    />
                  ))}
                </Progress>
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MultiBars;
