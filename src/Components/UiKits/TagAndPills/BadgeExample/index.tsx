import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import {
  BadgesExample,
  Checkout,
  Inbox,
  Latest,
  LogOut,
  Login,
  Trending,
} from "@/Constants";
import { HeadingBadgeSubTitle } from "@/Data/UiKits/TagAndPills";
import { Badge, Card, CardBody, Col } from "reactstrap";

const BadgeExample = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="height-equal title-line">
        <CommonCardHeader
          title={BadgesExample}
          subTitle={HeadingBadgeSubTitle}
        />
        <CardBody>
          <h1 className="badge-heading">
            {"Badge Heading 1"} <Badge color="primary">{Latest}</Badge>
          </h1>
          <h2 className="badge-heading">
            {"Badge Heading 2"} <Badge color="secondary">{Trending}</Badge>
          </h2>
          <h3 className="badge-heading">
            {"Badge Heading 3"} <Badge color="success">{Checkout}</Badge>
          </h3>
          <h4 className="badge-heading">
            {"Badge Heading 4"} <Badge color="warning">{Inbox}</Badge>
          </h4>
          <h5 className="badge-heading">
            {"Badge Heading 5"} <Badge color="danger">{Login}</Badge>
          </h5>
          <h6 className="badge-heading">
            {"Badge Heading 6"} <Badge color="dark">{LogOut}</Badge>
          </h6>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BadgeExample;
