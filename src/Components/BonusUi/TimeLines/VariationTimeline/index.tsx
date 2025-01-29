import { Card, CardBody, Col } from "reactstrap";
import { VariationTimelines } from "@/Constants";
import { DynamicVariationTimeline } from "./DynamicVariationTimeline";
import { StaticVariationTimeline } from "./StaticVariationTimeline";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { VariationTimeLineData } from "@/Data/BonusUi/Timeline";

const VariationTimeline = () => {
  return (
    <Col xxl="4" xl="5" className="notification box-col-12">
      <Card className="title-line ">
        <CommonCardHeader title={VariationTimelines} subTitle={VariationTimeLineData} />
        <CardBody className="dark-timeline">
          <ul className="timeline-lists variation-timeline">
            <StaticVariationTimeline/>
            <DynamicVariationTimeline />
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VariationTimeline;
