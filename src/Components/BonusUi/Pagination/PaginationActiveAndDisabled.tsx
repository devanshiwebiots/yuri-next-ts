import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { PaginationWithActiveAndDisabled, Href, Previous, Next } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ActiveDisablePaginationsData } from "@/Data/BonusUi/Pagination";

const PaginationActiveAndDisabled = () => {
  return (
    <Col md="6">
      <Card className="height-equal title-line">
        <CommonCardHeader title={PaginationWithActiveAndDisabled} subTitle={ActiveDisablePaginationsData} />
        <CardBody>
          <Pagination className="pagination-success pagin-border-success mb-3" aria-label="Page navigation example">
            <PaginationItem disabled><PaginationLink href={Href} previous>{Previous}</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href}>1</PaginationLink></PaginationItem>
            <PaginationItem active><PaginationLink href={Href}>2</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href}>3</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href} next>{Next}</PaginationLink></PaginationItem>
          </Pagination>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationActiveAndDisabled;
