import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, TagsWithIcon } from "@/Constants";
import {
  TagWithIconData,
  TagsWithIconSubTitle,
} from "@/Data/UiKits/TagAndPills";
import { DollarSign } from "react-feather";
import { Badge, Card, CardBody, Col } from "reactstrap";

const TagWithIcon = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="title-line">
        <CommonCardHeader
          title={TagsWithIcon}
          subTitle={TagsWithIconSubTitle}
        />
        <CardBody>
          <div className="badge-spacing">
            <Badge color="primary" href={Href}>
              <DollarSign />
            </Badge>
            {TagWithIconData.map((element, index) => (
              <Badge key={index} color={element.color} href={Href}>
                {element.icon}
              </Badge>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TagWithIcon;
