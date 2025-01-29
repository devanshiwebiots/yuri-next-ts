import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CrossFades, ImagePath } from "@/Constants";
import { CrossFadeCarouselData, CrossFadeData } from "@/Data/BonusUi/OwlCarousel";
import { OwlCarouselItem } from "@/Types/BonusUi";
import Image from "next/image";
import { useState } from "react";
import { Card, CardBody, Carousel, CarouselControl, CarouselItem, Col } from "reactstrap";

const CrossFade =() => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === CrossFadeCarouselData.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? CrossFadeCarouselData.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const slides = CrossFadeCarouselData.map((item: OwlCarouselItem) => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.id}>
        <img src={`${ImagePath}/slider/${item.image}`} alt="drawing-room" className="d-block w-100" />
      </CarouselItem>
    );
  });
  return (
    <Col xl={6} xs={12}>
      <Card className="height-e title-linequal title-line">
        <CommonCardHeader title={CrossFades} subTitle={CrossFadeData} />
        <CardBody>
          <Carousel activeIndex={activeIndex} next={next} previous={previous} fade={true}>
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </CardBody>
      </Card>
    </Col>
  );
}
export default CrossFade