import { HobbiesAndInterest } from "@/Constants";
import { HobbiesData } from "@/Data/SocialApp";
import { MoreVertical } from "react-feather";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

const HobbiesAndInterests = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeader className="social-header">
          <h5>{HobbiesAndInterest}<span className="pull-right"><MoreVertical /></span></h5>
        </CardHeader>
        <CardBody>
          {HobbiesData.map((data, index) => (
            <Row className="details-about" key={index}>
              <Col sm="6">
                <div className="your-details">
                  <span className="f-w-600">{data.heading1}</span>
                  <p>{data.paragraph1}</p>
                </div>
              </Col>
              <Col sm="6">
                <div className="your-details your-details-xs">
                  <span className="f-w-600">{data.heading2}</span>
                  <p>{data.paragraph2}</p>
                </div>
              </Col>
            </Row>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default HobbiesAndInterests;
