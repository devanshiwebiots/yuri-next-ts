import { YuriCustomModal } from "@/Constants";
import { Card, CardBody, Col, Row } from "reactstrap";
import ModalThird from "./BalanceModal";
import { ModalOne } from "./ProfileModal";
import ModalTwo from "./ResultModal";
import { CustomModalData } from "@/Data/UiKits/Modal";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";

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
