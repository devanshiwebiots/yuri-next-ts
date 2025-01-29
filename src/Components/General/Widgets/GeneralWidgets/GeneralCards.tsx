import SvgIcon from "@/CommonComponents/CommonIcons/CommonSvgIcons";
import { GeneralCardData } from "@/Data/General/Widgets/General";
import { Card, CardBody, Col, Row } from "reactstrap";

const GeneralCards = () => {
  return (
    <Col xl="6" md="9" className="box-col-6 order-md-ii">
      <Row className="tread-cards">
        {GeneralCardData.map((item, i) => (
          <Col key={i} sm="6" xl="6">
            <Card className=" widget-1">
              <CardBody className="common-box">
                <div className={`widget-icon ${item.color} widget-round`}>
                  <SvgIcon iconId={item.icon} />
                </div>
                <div>
                  <h3 className="f-w-600">{item.title}</h3>
                  <span className="f-w-500 f-light f-12">{item.description}</span>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default GeneralCards;
