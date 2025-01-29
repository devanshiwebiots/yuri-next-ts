import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { GridColumn } from "@/Constants";
import { GridColumnData, GridColumnSubTitle } from "@/Data/UiKits/Grid";
import { Card, CardBody, Col, Row } from "reactstrap";

const GridColumnCard = () => {
 
  return (
    <Col sm="12">
      <Card className="title-line">
        <CommonCardHeader title={GridColumn} subTitle={GridColumnSubTitle} />
        <CardBody className="grid-showcase">
          <Row>
            {GridColumnData.map((element, index) => (
              <Col key={index} md={element.mdClass}>
                <span>{element.text}</span>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GridColumnCard;
