import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath } from "@/Constants";
import { MouseOverSubTitle, MouseWheelSliderOptions } from "@/Data/BonusUi/OwlCarousel";
import Image from "next/image";
import Slider from "react-slick";
import { Card, CardBody, Col } from "reactstrap";

const MouseOver = () => {
  return (
    <Col xl={6} xs={12}>
      <Card className="title-line">
        <CommonCardHeader title='Mouse Wheel Variant' subTitle={MouseOverSubTitle} />
        <CardBody className="custom-padding-slider">
          <Slider {...MouseWheelSliderOptions}>
            {[...Array(11)].map((item, index) => (
              <div className="item px-1" key={index}>
                <img src={`${ImagePath}/slider/${index + 1}.jpg`} alt="Drawing-room" className="img-fluid rounded" />
              </div>
            ))}
          </Slider>
        </CardBody>
      </Card>
    </Col>
  );
};
export default MouseOver;
