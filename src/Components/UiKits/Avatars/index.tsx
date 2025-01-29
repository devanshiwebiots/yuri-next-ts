import { Container, Row } from "reactstrap";
import AvatarGrouping from "./Grouping";
import AvatarRatio from "./Ratio";
import AvatarShapes from "./Shapes";
import AvatarSizes from "./Sizes";
import StatusIndicatorAvatars from "./StatusIndicator";

const AvatarsContainer = () => {
  return (
    <Container fluid>
      <Row>
        <AvatarSizes />
        <StatusIndicatorAvatars />
        <AvatarShapes />
        <AvatarRatio />
        <AvatarGrouping />
      </Row>
    </Container>
  );
};

export default AvatarsContainer;
