import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { WithIndicator } from "@/Constants";
import { WithIndicatorData, WithIndicatorDataList } from "@/Data/BonusUi/OwlCarousel";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";

const WithIndicators = () => {
  return (
    <Col xl="6" xs="12">
      <Card className="title-line">
        <CommonCardHeader title={WithIndicator} subTitle={WithIndicatorData} />
        <CardBody>
          <CommonCarousel data={WithIndicatorDataList} control indecators ride="carousel" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithIndicators;
