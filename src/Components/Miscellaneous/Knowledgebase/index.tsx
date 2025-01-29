import React from "react";
import { Container, Row } from "reactstrap";
import KnowledgebaseHelp from "./KnowledgebaseHelp";
import CategoryData from "./CategoryData";
import FeaturesTutorial from "./FeaturesTutorial";
import ArticalAndVideo from "./ArticalVideo";
import FaqWidgets from "./FaqWidgets";

const KnowledgebaseContainer = () => {
  return (
    <Container fluid>
      <Row>
        <KnowledgebaseHelp />
        <FaqWidgets/>
        <CategoryData />
        <FeaturesTutorial />
        <ArticalAndVideo />
      </Row>
    </Container>
  );
};

export default KnowledgebaseContainer;
