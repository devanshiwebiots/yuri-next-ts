import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, PillsWithIcon } from "@/Constants";
import {
  PillWithIconSubTitle,
  TagWithIconData,
} from "@/Data/UiKits/TagAndPills";
import { DollarSign } from "react-feather";
import { Badge, Card, CardBody, Col } from "reactstrap";

const PillWithIcon = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="title-line">
        <CommonCardHeader
          title={PillsWithIcon}
          subTitle={PillWithIconSubTitle}
        />
        <CardBody>
          <div className="badge-spacing">
            <Badge
              pill
              className=" rounded-circle p-2 "
              color="primary"
              href={Href}
            >
              <DollarSign />
            </Badge>
            {TagWithIconData.map((element, index) => (
              <Badge
                pill
                className=" rounded-circle p-2 "
                key={index}
                color={element.color}
                href={Href}
              >
                {element.icon}
              </Badge>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillWithIcon;
