import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import RatioImage from "@/CommonComponents/RatioImage";
import { ImagePath } from "@/Constants";
import { MouseOverSubTitle } from "@/Data/BonusUi/OwlCarousel";
import { Card, CardBody, Col } from "reactstrap";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const MouseOver = () => {
  return (
    <Col xl={6} xs={12}>
      <Card className="title-line">
        <CommonCardHeader title="Mouse Wheel Variant" subTitle={MouseOverSubTitle} />
        <CardBody className="custom-padding-slider">
          <Swiper modules={[Pagination, Mousewheel]} pagination={{ clickable: true }} mousewheel spaceBetween={10} slidesPerView={3} loop>
            {[...Array(11)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="item">
                  <RatioImage className="d-block w-100" src={`${ImagePath}/slider/${index + 1}.jpg`} alt="drawing-room" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
};
export default MouseOver;
