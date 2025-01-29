import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DarkVariants } from "@/Constants";
import { DarkVariantData, DarkVariantDataList } from "@/Data/BonusUi/OwlCarousel";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";

const DarkVariant = () => {
  return (
    <Col xl="6" sm="12">
      <Card className="title-line">
        <CommonCardHeader title={DarkVariants} subTitle={DarkVariantData} />
        <CardBody>
          <CommonCarousel dark data={DarkVariantDataList} control caption lightCaption indecators />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DarkVariant;
