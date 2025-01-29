import { Container, Row } from "reactstrap";
import GridColumnCard from "./GridColumns";
import GridOptionsCard from "./GridOptions";
import HorizontalAlignmentCard from "./HorizontalAlignment";
import NestingCard from "./Nesting";
import OffsetCard from "./Offset";
import OrderCard from "./Order";
import VerticalAlignmentCard from "./VerticalAlignment";

const GridContainer = () => {
  return (
    <Container fluid>
      <Row>
        <GridOptionsCard />
        <GridColumnCard />
        <VerticalAlignmentCard />
        <HorizontalAlignmentCard />
        <NestingCard />
        <OrderCard />
        <OffsetCard />
      </Row>
    </Container>
  );
};

export default GridContainer;
