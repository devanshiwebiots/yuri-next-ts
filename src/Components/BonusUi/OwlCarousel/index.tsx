import { Container, Row } from "reactstrap";
import AutoPlayVariant from "./AutoPlayVariant";
import CrossFade from "./CrossFade";
import DarkVariant from "./DarkVariant";
import DisableTouchSwiping from "./DisableTouchSwiping";
import IndividualInterval from "./IndividualInterval";
import MouseOver from "./MouseWheelVariant";
import SlidesOnly from "./SlidesOnly";
import WithCaptions from "./WithCaptions";
import WithControls from "./WithControls";
import WithIndicators from "./WithIndicators";

const OwlCarouselContainer = () => {
  return (
    <Container fluid>
      <Row>
        <SlidesOnly />
        <WithControls />
        <AutoPlayVariant />
        <MouseOver />
        <WithIndicators />
        <WithCaptions />
        <CrossFade />
        <IndividualInterval />
        <DisableTouchSwiping />
        <DarkVariant />
      </Row>
    </Container>
  );
};

export default OwlCarouselContainer;
