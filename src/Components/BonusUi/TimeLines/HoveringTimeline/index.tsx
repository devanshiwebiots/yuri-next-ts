import { Card, CardBody, Col } from "reactstrap";
import { HoveringTimelines } from "@/Constants";
import { MeetupHoveringTimeline } from "./MeetupHoveringTimeline";
import { InterviewHoveringTimeline } from "./InterviewHoveringTimeline";
import { AnnualFunctionHoveringTimeline } from "./AnnualFunctionHoveringTimeline";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { HoveringTimeLineData } from "@/Data/BonusUi/Timeline";

const HoveringTimeline = () => {
  return (
    <Col xl="6">
      <Card className="title-line  height-equal">
        <CommonCardHeader title={HoveringTimelines} subTitle={HoveringTimeLineData} />
        <CardBody className="dark-timeline mb-4">
          <ul className="square-timeline simple-list">
            <AnnualFunctionHoveringTimeline />
            <InterviewHoveringTimeline />
            <MeetupHoveringTimeline />
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HoveringTimeline;