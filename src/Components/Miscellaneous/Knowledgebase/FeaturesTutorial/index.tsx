import { Card, CardBody, CardFooter, Col, Row } from "reactstrap";
import { Rating } from "react-simple-star-rating";
import ProductHover from "./ProductHover";
import { FeaturedTutorial, ImagePath, StarColor } from "@/Constants";
import { FeaturesData } from "@/Data/Miscellaneous/Knowledgebase";
import Image from "next/image";

const FeaturesTutorial = () => {
  return (
    <Col lg="12">
      <div className="header-faq">
        <h3 className="mb-0">{FeaturedTutorial}</h3>
      </div>
      <Row>
        {FeaturesData.map((item, id) => (
          <Col xl="3" md="6" className="xl-50 box-col-6" key={id}>
            <Card className="features-faq product-box">
              <div className="faq-image product-img">
                <div className="knowledgebase-image">
                  <Image width={382} height={286} alt="feature" className="img-fluid" src={`${ImagePath}/faq/${item.image}`} />
                </div>
                <ProductHover />
              </div>
              <CardBody>
                <h5 className="f-w-500">{item.title}</h5>
                <p>{item.description}</p>
              </CardBody>
              <CardFooter className="d-flex align-items-center justify-content-between">
                <span>{item.date}</span>
                <Rating fillColor={StarColor} initialValue={Math.random() * 5} size={14} />
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};
export default FeaturesTutorial;
