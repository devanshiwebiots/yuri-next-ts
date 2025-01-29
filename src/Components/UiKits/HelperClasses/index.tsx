import { Container, Row } from "reactstrap";
import BackgroundColorsClass from "./BackgroundColors";
import BorederAndDisplaysClass from "./BorderAndDisplays";
import BorderColorsClass from "./BorderColors";
import FontStylesClass from "./FontStyles";
import FontWeightClass from "./FontWeight";
import ImageSizesClass from "./ImageSizes";
import MarginClass from "./MarginClass";
import OneSideMarginClass from "./OneSideMargin";
import OneSidePadding from "./OneSidePadding";
import PaddingClass from "./PaddingClass";
import StyleInBordersClass from "./StyleInBorders";
import TextColorsClass from "./TextColors";
import FontSizesClass from "./FontSizes";

const HelperClassesContainer = () => {
  return (
    <Container fluid>
      <Row>
        <StyleInBordersClass />
        <BorederAndDisplaysClass />
        <BackgroundColorsClass />
        <BorderColorsClass />
        <ImageSizesClass />
        <FontStylesClass />
        <FontWeightClass />
        <TextColorsClass />
        <PaddingClass />
        <OneSidePadding />
        <MarginClass />
        <OneSideMarginClass />
        <FontSizesClass />
      </Row>
    </Container>
  );
};

export default HelperClassesContainer;
