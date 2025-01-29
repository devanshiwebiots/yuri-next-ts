import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { PillsWithNumber } from "@/Constants";
import {
  PillsWithNumberSubTitle,
  TagsWithNumData,
} from "@/Data/UiKits/TagAndPills";
import { Badge, Card, CardBody, Col } from "reactstrap";

const PillWithNumber = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="title-line">
        <CommonCardHeader
          title={PillsWithNumber}
          subTitle={PillsWithNumberSubTitle}
        />
        <CardBody className="digits">
          <div className="badge-spacing">
          <Badge pill  className=" rounded-circle badge-p-space" color="primary">
            1
          </Badge>
          {TagsWithNumData.map((element, index) => (
            <Badge pill key={index} className=" rounded-circle badge-p-space" color={element.color}>
              {element.text}
            </Badge>
          ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillWithNumber;
