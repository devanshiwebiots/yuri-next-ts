import { Card, CardBody, Col, Row } from "reactstrap";
import { ModalOne } from "./ProfileModal";
import ModalTwo from "./ResultModal";
import ModalThird from "./BalanceModal";
import { YuriCustomModal } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CustomModalData } from "@/Data/UiKits/Modal";

const YuriCustomModals = () => {
  return (
    <Col sm="12">
      <Card className="title-line">
        <CommonCardHeader title={YuriCustomModal} subTitle={CustomModalData} />
        <CardBody>
          <Row className="g-3">
            <ModalOne />
            <ModalTwo />
            <ModalThird />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default YuriCustomModals;
