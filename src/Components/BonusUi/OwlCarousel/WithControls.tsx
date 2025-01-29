import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { WithControl } from "@/Constants";
import { WithControlData, WithControlDataList } from "@/Data/BonusUi/OwlCarousel";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";

const WithControls = () => {
  return (
    <Col xl="6" xs="12">
      <Card className="title-line">
        <CommonCardHeader title={WithControl} subTitle={WithControlData} />
        <CardBody>
          <CommonCarousel data={WithControlDataList} control interval="2000" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithControls;