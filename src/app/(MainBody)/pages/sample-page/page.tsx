import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { samplePageData, samplePageSubTitle } from "@/Data/Pages";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

export default function SamplePageContainer() {
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <Card className="title-line">
            <CommonCardHeader title={"Sample Card"} subTitle={samplePageSubTitle} />
            <CardBody>
              {samplePageData.map((item) => (
                <p key={item.id}>
                  <strong>{item.strongText} </strong> {item.text}
                </p>
              ))}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
