import { Col, Row } from "reactstrap";
import { ArticalAndVideo1 } from "./ArticalAndVideo1";
import ArticalAndVideo2 from "./ArticalAndVideo2";
import ArticalAndVideo3 from "./ArticalAndVideo3";

const ArticalAndVideo = () => {
  return (
    <Col lg="12">
      <div className="header-faq">
        <h4 className="mb-0">Latest Articles</h4>
      </div>
      <Row>
        <ArticalAndVideo1 />
        <ArticalAndVideo2 />
        <ArticalAndVideo3 />
      </Row>
    </Col>
  );
};

export default ArticalAndVideo;
