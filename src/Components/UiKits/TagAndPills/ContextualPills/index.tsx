import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { PillContextualVariations, Primary } from "@/Constants";
import {
  ContextualBadgeData,
  ContextualPillsSubTitle,
} from "@/Data/UiKits/TagAndPills";
import { Badge, Card, CardBody, Col } from "reactstrap";

const ContextualPills = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="title-line">
        <CommonCardHeader
          title={PillContextualVariations}
          subTitle={ContextualPillsSubTitle}
        />
        <CardBody>
          <div className="badge-spacing">
            <Badge pill className="rounded" color="primary">
              {Primary}
            </Badge>
            {ContextualBadgeData.map((element, index) => (
              <Badge pill className="rounded" key={index} color={element.color}>
                {element.text}
              </Badge>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContextualPills;
