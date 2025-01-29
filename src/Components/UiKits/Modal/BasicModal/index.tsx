import { BasicModal } from "@/Constants";
import { Card, CardBody, Col } from "reactstrap";
import OpenModalYuri from "./OpenModalYuri";
import ScrollingModal from "./ScrollingModal";
import { SimpleModal } from "./SimpleModal";
import { ToolTipAndPopover } from "./ToolTipAndPopover";
import { BasicData } from "@/Data/UiKits/Modal";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";

const BasicModalCart = () => {
  return (
    <Col lg="6">
      <Card className="title-line">
        <CommonCardHeader title={BasicModal} subTitle={BasicData} />
        <CardBody className="badge-spacing">
          <SimpleModal />
          <ScrollingModal />
          <ToolTipAndPopover />
          <OpenModalYuri />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicModalCart;
