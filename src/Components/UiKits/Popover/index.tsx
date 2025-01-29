import { Container, Row } from "reactstrap";
import BasicPopover from "./BasicPopover";
import PopoverDirection from "./DirectionPopover";
import PopoverOffset from "./OffsetPopover";

const PopoverContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicPopover />
        <PopoverDirection />
        <PopoverOffset />
      </Row>
    </Container>
  );
};

export default PopoverContainer;
