import { Container, Row } from "reactstrap";
import RowCreateCallback from "./RowCreateCallback";
import StockResult from "./StockResult";

const AdvanceInitContainer = () => {
  return (
    <Container fluid className="advance-init-table">
      <Row>
        <StockResult />
        <RowCreateCallback />
      </Row>
    </Container>
  );
};

export default AdvanceInitContainer;
