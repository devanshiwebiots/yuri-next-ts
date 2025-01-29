import { Container, Row } from "reactstrap";
import BlockQuotesCard from "./BlockQuotesCard";
import ColoredHeadings from "./ColoredHeadings";
import DisplayHeading from "./DisplayHeading";
import FontWeight from "./FontWeight";
import Headings from "./Headings";
import InlineTextElements from "./InlineTextElements";
import TextColor from "./TextColor";

const TypographyContainer = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Headings />
          <ColoredHeadings />
          <FontWeight />
          <DisplayHeading />
          <InlineTextElements />
          <TextColor />
          <BlockQuotesCard />
        </Row>
      </Container>
    </>
  );
};

export default TypographyContainer;
