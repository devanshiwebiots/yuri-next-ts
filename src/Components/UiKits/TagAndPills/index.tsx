import { Container, Row } from "reactstrap";
import BadgeExample from "./BadgeExample";
import ButtonPart from "./ButtonPart";
import ContextualBadge from "./ContextualBadge";
import ContextualPills from "./ContextualPills";
import PillWithIcon from "./PillWithIcon";
import PillWithNumber from "./PillWithNumber";
import TagWithNumber from "./TagWithNumber";
import TagWithIcon from "./TagsWithIcon";

const TagAndPillsContainer = () => {
  return (
    <Container fluid>
      <Row>
        <ContextualBadge />
        <ContextualPills />
        <TagWithNumber />
        <PillWithNumber />
        <TagWithIcon />
        <PillWithIcon />
        <BadgeExample />
        <ButtonPart />
      </Row>
    </Container>
  );
};

export default TagAndPillsContainer;
