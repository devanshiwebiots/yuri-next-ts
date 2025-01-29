import { Card, CardBody, Col } from "reactstrap";
import TopRightToast from "./TopRightToast";
import BottomRightToast from "./BottomRightToast";
import TopLeftToast from "./TopLeftToast";
import BottomLeftToast from "./BottomLeftToast";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LiveToasts } from "@/Constants";
import { LiveToastData } from "@/Data/BonusUi/Toast";

const LiveToast = () => {
  return (
    <Col md="6">
      <Card className="title-line">
        <CommonCardHeader title={LiveToasts} subTitle={LiveToastData} />
        <CardBody className="position-relative common-flex">
          <TopRightToast />
          <BottomRightToast />
          <TopLeftToast />
          <BottomLeftToast />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LiveToast;
