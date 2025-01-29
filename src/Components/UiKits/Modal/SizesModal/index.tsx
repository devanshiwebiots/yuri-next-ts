import { SizesModal } from "@/Constants";
import { Card, CardBody, Col } from "reactstrap";
import FullScreenModal from "./FullscreenModal";
import ExtraLargeModal from "./ExtraLargeModal";
import LargeModal from "./LargeModal";
import SmallModal from "./SmallModal";
import { SizeDatas } from "@/Data/UiKits/Modal";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";

const SizeModalCart = () => {
  return (
    <Col lg="6">
      <Card className="title-line">
        <CommonCardHeader title={SizesModal} subTitle={SizeDatas} />
        <CardBody className="badge-spacing">
          <FullScreenModal />
          <ExtraLargeModal />
          <LargeModal />
          <SmallModal />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SizeModalCart;
