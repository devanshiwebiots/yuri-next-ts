import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SlideOnly } from "@/Constants";
import { SliesOnlyData, SliesOnlyDataList } from "@/Data/BonusUi/OwlCarousel";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";

const SlidesOnly = () => {
  return (
    <Col xl="6" xs="12">
      <Card className="title-line">
        <CommonCardHeader title={SlideOnly} subTitle={SliesOnlyData} />
        <CardBody>
          <CommonCarousel data={SliesOnlyDataList} interval="2000"  />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SlidesOnly;
