import { Card, CardBody, Col } from "reactstrap";
import { PaginationAlignments } from "@/Constants";
import { StaticPaginationAlignment } from "./StaticPaginationAlignment";
import { DynamicPaginationAlignment } from "./DynamicPaginationAlignment";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AlignmentPaginationData } from "@/Data/BonusUi/Pagination";

const PaginationAlignment = () => {
  return (
    <Col xl="6">
      <Card className="title-line">
        <CommonCardHeader title={PaginationAlignments} subTitle={AlignmentPaginationData} />
        <CardBody>
          <StaticPaginationAlignment />
          <DynamicPaginationAlignment/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationAlignment;
