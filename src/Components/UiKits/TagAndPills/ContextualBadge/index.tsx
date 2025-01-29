import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BadgeContextualVariations, Primary } from "@/Constants";
import { ContextualBadgeData, ContextualBadgeSubTitle } from "@/Data/UiKits/TagAndPills";
import { Badge, Card, CardBody, Col } from "reactstrap";

const ContextualBadge = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="title-line">
        <CommonCardHeader title={BadgeContextualVariations} subTitle={ContextualBadgeSubTitle} />
        <CardBody>
          <div className="badge-spacing">
            <Badge color="primary">{Primary}</Badge>
            {ContextualBadgeData.map((element, index) => (
              <Badge key={index} color={element.color}>
                {element.text}
              </Badge>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContextualBadge;
