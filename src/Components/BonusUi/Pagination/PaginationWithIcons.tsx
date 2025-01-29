import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { PaginationWithIcon, Href, NextData } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { IconPaginationData } from "@/Data/BonusUi/Pagination";

const PaginationWithIcons = () => {
  return (
    <Col md="6">
    <Card className="height-equal title-line">
      <CommonCardHeader title={PaginationWithIcon} subTitle={IconPaginationData} />
      <CardBody>
        <Pagination className="pagination-secondary pagin-border-secondary mb-3" aria-label="Page navigation example">
          <PaginationItem ><PaginationLink href={Href} first ></PaginationLink></PaginationItem>
          {NextData.map((item,index)=>(<PaginationItem key={index}><PaginationLink href={Href}>{item}</PaginationLink></PaginationItem>))}
          <PaginationItem><PaginationLink href={Href} last></PaginationLink></PaginationItem>
        </Pagination>
      </CardBody>
    </Card>
  </Col>
  )
}

export default PaginationWithIcons