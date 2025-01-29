import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BreadcrumbAlert, BreadcrumbHome, BreadcrumbUiKits, DefaultBreadcrumbs, Href } from "@/Constants";
import { BreadcrubmData } from "@/Data/BonusUi/Breadcrumb";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";

const DefaultBreadcrumb = () => {
  return (
    <Col sm="6">
      <Card className="height-equal title-line">
        <CommonCardHeader title={DefaultBreadcrumbs} subTitle={BreadcrubmData} />
        <CardBody>
          <Breadcrumb>
            <BreadcrumbItem><a href={Href}>{BreadcrumbHome}</a></BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbUiKits}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="m-0">
            <BreadcrumbItem><a href={Href}>{BreadcrumbHome}</a></BreadcrumbItem>
            <BreadcrumbItem><a href={Href}>{BreadcrumbUiKits}</a></BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbAlert}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultBreadcrumb;
