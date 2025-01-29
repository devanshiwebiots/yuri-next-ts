import { Button, Card, CardBody, Col, Row } from "reactstrap";
import { Href, Purchase, SimplePricingCards } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SimplePricingData } from "@/Data/Ecommerce";

const SimplePricingCard = () => {
  return (
    <Card>
      <CommonCardHeader title={SimplePricingCards} />
      <CardBody className="pricing-content">
        <Row className="g-sm-4 g-3">
          {SimplePricingData.map((item, index) => (
            <Col xl='3' sm='6' className="xl-50 box-col-6"key={index}>
              <Card className="text-center pricing-simple">
                <CardBody>
                  <h3>{item.title}</h3>
                  <h1>${item.price}</h1>
                  <h6 className="mb-0">{item.plan}</h6>
                </CardBody>
                <div>
                  <Button block tag="a" color="primary" size="lg" href={Href}>{Purchase}</Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
};

export default SimplePricingCard;
