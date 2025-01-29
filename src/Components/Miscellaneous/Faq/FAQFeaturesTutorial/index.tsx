import { Col, Row } from "reactstrap";
import FaqFeaturesTutorial from "./FaqFeaturesTutorial";
import { FeaturedTutorials } from "@/Constants";

const FAQFeaturesTutorial = () => {
  return (
    <Col lg="12" className="featured-tutorial">
      <div className="header-faq">
        <h2 className="mb-0">{FeaturedTutorials}</h2>
      </div>
      <Row>
        <FaqFeaturesTutorial />
      </Row>
    </Col>
  );
};
export default FAQFeaturesTutorial;
