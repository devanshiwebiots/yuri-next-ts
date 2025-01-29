import SvgIcon from "@/CommonComponents/CommonIcons/CommonSvgIcons";
import { Href } from "@/Constants";
import { Card, CardBody, CardHeader, Col, Progress, Row } from "reactstrap";

const CustomerRate = () => {
  return (
    <Col xs="12" className=" col-xl-50">
      <Card className="height-equal title-line">
        <CardHeader className=" card-no-border">
          <div className="header-top">
            <h2>Customer Rate</h2>
            <div className="card-header-right-icon customer-header">
              <a className="link-stroke-icon" href={Href}>
                Live view
                <SvgIcon iconId="eye-contact" />
              </a>
            </div>
          </div>
        </CardHeader>
        <CardBody className=" pt-0">
          <Row>
            <Col sm="6">
              <div className="customer-rate">
                <Progress value={76} />
                <span className="f-light f-12 f-w-500">First time buying</span>
                <h3 className="f-w-600">76.8%</h3>
              </div>
            </Col>
            <Col sm="6">
              <div className="customer-rate">
                <Progress barClassName="progress_1" value={76} />
                <span className="f-light f-12 f-w-500">Returning</span>
                <h3 className="f-w-600">25.4%</h3>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomerRate;
