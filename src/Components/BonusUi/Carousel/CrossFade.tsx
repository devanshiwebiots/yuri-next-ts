import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import RatioImage from "@/CommonComponents/RatioImage";
import { CrossFades, ImagePath } from "@/Constants";
import { CrossFadeCarouselData, CrossFadeData } from "@/Data/BonusUi/OwlCarousel";
import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CrossFade =() => {
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Col xl={6} xs={12}>
      <Card className="height-e title-linequal title-line">
        <CommonCardHeader title={CrossFades} subTitle={CrossFadeData} />
        <CardBody>
          <Swiper modules={[Autoplay, EffectFade, Navigation]} effect="fade" navigation loop autoplay={{ delay: 2000 }} slidesPerView={1} onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}>
            {CrossFadeCarouselData?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                  <RatioImage className="d-block w-100" src={`${ImagePath}/${item.image}`} alt="drawing-room" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
}

export default CrossFade