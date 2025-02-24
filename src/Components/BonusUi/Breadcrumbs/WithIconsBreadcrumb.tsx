import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";
import { WithIconsBreadcrumbs, Href, BreadcrumbBonusUi, Breadcrumbs } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { WithIconBreadcrumbData } from "@/Data/BonusUi/Breadcrumb";

const WithIconsBreadcrumb = () => {
  return (
    <Col sm="6">
      <Card className="height-equal title-line">
        <CommonCardHeader title={WithIconsBreadcrumbs} subTitle={WithIconBreadcrumbData} />
        <CardBody>
          <Breadcrumb className="bg-white p-l-0">
            <BreadcrumbItem><a href={Href}><i className="fa fa-home"></i></a></BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbBonusUi}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="bg-white m-b-0 p-b-0 p-l-0" >
            <BreadcrumbItem><a href={Href}><i className="fa fa-home"></i></a></BreadcrumbItem>
            <BreadcrumbItem><a href={Href}>{BreadcrumbBonusUi}</a></BreadcrumbItem>
            <BreadcrumbItem active>{Breadcrumbs}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody> 
      </Card>
    </Col>
  )
}

export default WithIconsBreadcrumb