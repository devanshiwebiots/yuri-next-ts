import { Card, CardBody, Col } from "reactstrap";
import { TimelineTitle } from "@/Constants";
import AppIdeasTimeline from "./AppIdeasTimeline";
import { VerticalTimeline } from "react-vertical-timeline-component";
import BlogTimeline from "./BlogTimeline";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TimeLineData } from "@/Data/BonusUi/Timeline";
import CarouselTimeline from "./CarouselTimeline";
import AutoTestingTimeline from "./AutoTestingTimeline";
import MeetUpTimeline from "./MeetUpTimeline";
import ResolutionTimeline from "./ResolutionTimeline";

const Timelines = () => {
  return (
    <Col sm="12" className="box-col-12">
      <Card className="title-line">
        <CommonCardHeader title={TimelineTitle} subTitle={TimeLineData} />
        <CardBody className="default-timeline">
          <section className="cd-container" id="cd-timeline">
            <AppIdeasTimeline />
            <BlogTimeline />
            <CarouselTimeline />
            <AutoTestingTimeline />
            <MeetUpTimeline />
            <ResolutionTimeline />
          </section>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Timelines;
