import { FullScreenModal } from "@/Constants";
import { Card, CardBody, Col } from "reactstrap";
import FullModal from "./FullModal";
import FullScreenBelowSm from "./FullScreenBelowSm";
import FullScreenBelowMd from "./FullScreenBelowMd";
import FullScreenBelowLg from "./FullScreenBelowLg";
import FullScreenBelowXl from "./FullScreenBelowXl";
import FullScreenBelowXxl from "./FullScreenBelowXxl";
import { FullScreenModalData } from "@/Data/UiKits/Modal";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";

const FullScreenModals = () => {
  return (
    <Col xl="12">
      <Card className="title-line">
        <CommonCardHeader title={FullScreenModal} subTitle={FullScreenModalData} />
        <CardBody className="badge-spacing">
          <FullModal />
          <FullScreenBelowSm />
          <FullScreenBelowMd />
          <FullScreenBelowLg />
          <FullScreenBelowXl />
          <FullScreenBelowXxl />
        </CardBody>
      </Card>
    </Col>
  );
};

export default FullScreenModals;