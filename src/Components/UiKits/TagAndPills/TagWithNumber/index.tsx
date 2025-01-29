import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, TagsWithNumber } from "@/Constants";
import {
  TagsWithNumData,
  TagsWithNumberSubTitle,
} from "@/Data/UiKits/TagAndPills";
import { Badge, Card, CardBody, Col } from "reactstrap";

const TagWithNumber = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="title-line">
        <CommonCardHeader
          title={TagsWithNumber}
          subTitle={TagsWithNumberSubTitle}
        />
        <CardBody className="digits">
          <div className="badge-spacing">
            <Badge color="primary" href={Href}>
              1
            </Badge>
            {TagsWithNumData.map((element, index) => (
              <Badge key={index} color={element.color} href={Href}>
                {element.text}
              </Badge>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TagWithNumber;
