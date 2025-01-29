import { Card, CardBody, Col } from "reactstrap";
import { DynamicBasicTimeline } from "./DynamicBasicTimeline";
import { StaticBasicTimeline } from "./StaticBasicTimeline";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicTimelines } from "@/Constants";
import { BasicTimeLineData } from "@/Data/BonusUi/Timeline";

const BasicTimeline = () => {
  return (
    <Col xl="6"  className="notification main-timeline">
      <Card className="title-line ">
        <CommonCardHeader title={BasicTimelines} subTitle={BasicTimeLineData} />
        <CardBody className="dark-timeline mb-0">
          <ul className="timeline-lists">
            <StaticBasicTimeline />
            <DynamicBasicTimeline />
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTimeline;
