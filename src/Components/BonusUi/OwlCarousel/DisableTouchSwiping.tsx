import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DisableTouchSwipings } from "@/Constants";
import { DisableTouchData, DisableTouchDataList } from "@/Data/BonusUi/OwlCarousel";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";

const DisableTouchSwiping = () => {
  return (
    <Col xl="6" xs="12">
      <Card className="title-line">
        <CommonCardHeader title={DisableTouchSwipings} subTitle={DisableTouchData} />
        <CardBody>
          <CommonCarousel data={DisableTouchDataList} control/>
        </CardBody>
      </Card>
    </Col>
  )
};

export default DisableTouchSwiping;
