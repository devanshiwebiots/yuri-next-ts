import { Col, Row } from "reactstrap";
import { ArticeVideo1 } from "./ArticeVideo1";
import ArticeVideo2 from "./ArticeVideo2";
import ArticeVideo3 from "./ArticeVideo3";
import { LatestArticles } from "@/Constants";

const ArticeVideo = () => {
  return (
    <Col lg="12">
      <div className="header-faq">
        <h2 className="mb-0">{LatestArticles}</h2>
      </div>
      <Row>
        <ArticeVideo1 />
        <ArticeVideo2 />
        <ArticeVideo3 />
      </Row>
    </Col>
  );
};
export default ArticeVideo;
