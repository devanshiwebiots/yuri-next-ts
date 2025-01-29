import { Card, Col, Row } from "reactstrap";
import { BrowseArticles, knowledgeArticle } from "@/Constants";
import { CategoryDataCardBody } from "./CategoryDataCardBody";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";

const CategoryData = () => {
  return (
    <Col sm="12">
      <div className="header-faq">
        <h3 className="mb-0">{knowledgeArticle}</h3>
      </div>
      <Row>
        <Col sm="12">
          <Card>
            <CommonCardHeader title={BrowseArticles} headClass="card-no-border pb-0" />
            <CategoryDataCardBody />
          </Card>
        </Col>
      </Row>
    </Col>
  );
};
export default CategoryData;
