import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { IndividualCarouselItemIntervals } from "@/Constants";
import { ItemIntervalData } from "@/Data/BonusUi/OwlCarousel";
import { Card, CardBody, Col } from "reactstrap";
import IndividualIntervalBody from "./IndividualIntervalBody";

const IndividualInterval = () => {
  return (
    <Col xl="6" xs="12">
      <Card className="title-line">
        <CommonCardHeader title={IndividualCarouselItemIntervals} subTitle={ItemIntervalData} />
        <CardBody>
          <IndividualIntervalBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default IndividualInterval;
