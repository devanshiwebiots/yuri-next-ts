import { Container, Row } from "reactstrap";
import BasicModalCart from "./BasicModal";
import CenteredModal from "./CenteredModal";
import FullScreenModals from "./FullScreenModal";
import SizeModalCart from "./SizesModal";
import StaticBackdropModal from "./StaticBackdropModal";
import ToggleBetweenModals from "./ToggleBetweenModals";
import YuriCustomModals from "./BasicModal/YuriCustomModals";

const ModalContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicModalCart />
        <SizeModalCart />
        <FullScreenModals />
        <CenteredModal />
        <ToggleBetweenModals />
        <StaticBackdropModal />
        <YuriCustomModals />
      </Row>
    </Container>
  );
};

export default ModalContainer;
