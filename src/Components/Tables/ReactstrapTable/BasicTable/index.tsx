import { Container, Row } from "reactstrap";
import BasicTableBorderBottomColor from "./BasicTableBorderBottomColor";
import { BreakPointSpecific } from "./BreakPointSpecific";
import { CaptionTable } from "./CaptionTable";
import { CustomColorHoverStripped } from "./CustomColorHoverStripped";
import { DashedBorder } from "./DashedBorder";
import { HoverableRows } from "./HoverableRows";
import InverseTable from "./InverseTable";
import { InverseTablePrimary } from "./InverseTablePrimary";
import { ResponsiveLightBackground } from "./ResponsiveLightBackground";
import { SizingTables } from "./SizingTables";
import { StripedRowInverseTable } from "./StripedRowInverseTable";
import { TableHeadOptions } from "./TableHeadOptions";

const BasicTableContainer = () => {
  return (
    <Container className="basic_table" fluid>
      <Row>
        <BasicTableBorderBottomColor />
        <InverseTable />
        <HoverableRows />
        <InverseTablePrimary />
        <CaptionTable />
        <TableHeadOptions />
        <StripedRowInverseTable />
        <BreakPointSpecific />
        <ResponsiveLightBackground />
        <SizingTables />
        <CustomColorHoverStripped />
        <DashedBorder />
      </Row>
    </Container>
  );
};

export default BasicTableContainer;
