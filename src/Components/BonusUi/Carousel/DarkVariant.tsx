import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import RatioImage from "@/CommonComponents/RatioImage";
import { DarkVariants, ImagePath } from "@/Constants";
import { DarkVariantData, DarkVariantDataList } from "@/Data/BonusUi/OwlCarousel";
import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const DarkVariant = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Col xl="6" sm="12">
      <Card className="title-line">
        <CommonCardHeader title={DarkVariants} subTitle={DarkVariantData} />
        <CardBody>
          <Swiper modules={[Navigation, Autoplay, Pagination]} navigation pagination={{ clickable: true }} loop slidesPerView={1} autoplay={{ delay: 2000 }} onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}>
            {DarkVariantDataList?.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                  <RatioImage className="d-block w-100" src={`${ImagePath}/${slide.image}`} alt="drawing-room" />
                  <div className="carousel-caption d-none d-md-block carousel-opacity">
                    <h3>{slide.captionHeader}</h3>
                    <p>{slide.captionText}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DarkVariant;
