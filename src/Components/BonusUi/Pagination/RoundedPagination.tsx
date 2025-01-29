import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { RoundedPaginations, Href, NextData } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { RoundedPaginationData } from "@/Data/BonusUi/Pagination";

const RoundedPagination = () => {
  return (
    <Col md="6">
    <Card className="height-equal title-line">
      <CommonCardHeader title={RoundedPaginations} subTitle={RoundedPaginationData} />
      <CardBody>
        <Pagination className="pagination pagination-dark pagin-border-dark" aria-label="Page navigation example">
          <PaginationItem ><PaginationLink className="rounded-circle me-2" href={Href} first ></PaginationLink></PaginationItem>
          {NextData.map((item,index)=>(<PaginationItem key={index}><PaginationLink  className="rounded-circle me-2" href={Href}>{item}</PaginationLink></PaginationItem>))}
          <PaginationItem><PaginationLink className="rounded-circle me-2" href={Href} last></PaginationLink></PaginationItem>
        </Pagination>
      </CardBody>
    </Card>
  </Col>
  )
}

export default RoundedPagination