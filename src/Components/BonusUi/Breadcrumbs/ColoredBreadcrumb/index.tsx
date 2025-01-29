import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { ColoredBreadcrumbs } from "@/Constants";
import { StaticColoredBreadcrumb } from "./StaticColoredBreadcrumb";
import { DynamicColoredBreadcrumb } from "./DynamicColoredBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ColoredBreadcrumData } from "@/Data/BonusUi/Breadcrumb";

const ColoredBreadcrumb = () => {
  return (
    <Col sm="12">
      <Card className="title-line">
        <CommonCardHeader title={ColoredBreadcrumbs} subTitle={ColoredBreadcrumData} />
        <CardBody>
          <StaticColoredBreadcrumb />
          <DynamicColoredBreadcrumb />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColoredBreadcrumb;
