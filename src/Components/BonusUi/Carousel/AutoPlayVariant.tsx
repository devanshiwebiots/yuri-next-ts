import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import RatioImage from "@/CommonComponents/RatioImage";
import { AutoPlayVariants, ImagePath } from "@/Constants";
import { MouseOverSubTitle } from "@/Data/BonusUi/OwlCarousel";
import { Card, CardBody, Col } from "reactstrap";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const AutoPlayVariant = () => {
  return (
    <Col xl="6" xs="12">
      <Card className="title-line">
        <CommonCardHeader title={AutoPlayVariants} subTitle={MouseOverSubTitle} />
        <CardBody className="custom-padding-slider">
          <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false }} pagination={{ clickable: true }} navigation={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper swiper-h">
            {[...Array(11)].map((item, index) => (
              <SwiperSlide key={index}>
                <RatioImage src={`${ImagePath}/slider/${index + 1}.jpg`} className="d-block w-100" alt="Vertical_Slider" />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AutoPlayVariant;
