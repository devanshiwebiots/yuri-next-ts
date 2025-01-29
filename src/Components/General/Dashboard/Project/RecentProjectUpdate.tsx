import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import SvgIcon from "@/CommonComponents/CommonIcons/CommonSvgIcons";
import { ImagePath } from "@/Constants";
import { RecentSliderData } from "@/Data/General/Dashboard/Project";
import Image from "next/image";
import { useRef } from "react";
import { Card, CardBody, Col, Progress } from "reactstrap";
import { Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const RecentProjectUpdate = () => {
  const swiperRef = useRef<any>(null);

  return (
    <Col xl={5} className="box-col-5">
      <Card className="title-line">
        <CommonCardHeader title={"Recent Project Update"} />
        <CardBody className="pt-0">
          <div className="recent-update">
            <Swiper
              className="mySwiper recent-slider"
              modules={[Grid]}
              grid={{ rows: 2, fill: "row" }}
              spaceBetween={20}
              onSwiper={(swiper: any) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={2}
              navigation={{ nextEl: ".swiper-next-arrow", prevEl: ".swiper-prev-arrow" }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 5, grid: { rows: 2, fill: "row" } },
                500: { slidesPerView: 2, spaceBetween: 20, grid: { rows: 2, fill: "row" } },
                1200: { slidesPerView: 1, spaceBetween: 20, grid: { rows: 2, fill: "row" } },
                1730: { slidesPerView: 2, spaceBetween: 20, grid: { rows: 2, fill: "row" } }
              }}
            >
              <div className="swiper-wrapper">
                {RecentSliderData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="light-card-2 recent-project-wrapper">
                      <div className={`recent-icon ${item.color}`}>
                        <SvgIcon iconId={item.icon} />
                      </div>
                      <div className="recent-content">
                        <div className="d-flex">
                          <div>
                            <h6>{item.title} </h6>
                            <span className="f-12 f-w-500 f-light">{"Design"}</span>
                          </div>
                          <div className="customers">
                            <ul className="simple-list flex-row">
                              {item.customers.map((list) => (
                                <li className="d-inline-block" key={list.id}>
                                  {list.image ? (
                                    <img className="img-30 rounded-circle" src={`${ImagePath}/${list.image}`} alt="user" />
                                  ) : (
                                    <div className="light-card">
                                      <span className="f-w-500 f-light f-12">
                                        {"+"}
                                        {list.number}
                                      </span>
                                    </div>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="recent-progress">
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="f-light f-w-500 f-12">{"Progress"}</span>
                            <span className="f-light f-w-500 f-12">
                              {item.progress}
                              {"%"}
                            </span>
                          </div>
                          <Progress animated striped className={`progress-stripe-${item.color} ${item.title === "Marketing" ? "with-light-background" : ""}`} style={{ height: "5px" }} value={item.progress} />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
            <div className="arrow-group">
              <div className="prev">
                <SvgIcon iconId="swiper-prev-arrow" onClick={() => swiperRef.current.slidePrev()} />
              </div>
              <div className="next">
                <SvgIcon iconId="swiper-next-arrow" onClick={() => swiperRef.current.slideNext()} />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default RecentProjectUpdate;
