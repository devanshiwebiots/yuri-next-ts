import { ImagePath } from "@/Constants";
import { Col } from "reactstrap";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function DealSlider() {
  return (
    <Col xl={4} md={12}>
      <div className="deal-slider">
        <Swiper pagination={{clickable: true}} modules={[Pagination]} slidesPerView={1} spaceBetween={10} className="mySwiper deal-swiper">
          <div className="swiper-wrapper">
            <SwiperSlide>
              <img className="img-fluid" src={`${ImagePath}/product/product-categories/phone.png`} alt="phone" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img-fluid" src={`${ImagePath}/dashboard-2/product/headphone.png`} alt="headphone" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img-fluid" src={`${ImagePath}/dashboard-2/product/chair.png`} alt="chair" />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </Col>
  );
}
