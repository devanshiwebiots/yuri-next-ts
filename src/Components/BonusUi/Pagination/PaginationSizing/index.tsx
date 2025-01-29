import { Card, CardBody, Col } from "reactstrap";
import { PaginationSizings } from "@/Constants";
import { DynamicPaginationSizing } from "./DynamicPaginationSizing";
import { StaticPaginationSizing } from "./StaticPaginationSizing";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SizingPaginationData } from "@/Data/BonusUi/Pagination";

const PaginationSizing = () => {
  return (
    <Col md="6"> 
      <Card className="height-equal title-line">
        <CommonCardHeader title={PaginationSizings} subTitle={SizingPaginationData} />
        <CardBody className="pb-4">
          <StaticPaginationSizing />
          <DynamicPaginationSizing />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationSizing;
