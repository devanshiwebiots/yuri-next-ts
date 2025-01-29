import { Row, CardBody, Col } from "reactstrap";
import { Gallery, Item } from "react-photoswipe-gallery";
import { HoverImageDataList } from "@/Data/Gallery";
import { Href, ImagePath } from "@/Constants";
import Link from "next/link";
import Image from "next/image";

export const ImageHoverEffectsCardBody = (props: { data: number }) => {
  return (
    <CardBody>
      <Row className="my-gallery gallery mb-auto">
        <Gallery>
          {HoverImageDataList &&
            HoverImageDataList.map((item, index) => (
              <Col md="3" sx="6" key={index}>
                <figure className={`m-0 img-hover hover-${props.data}`}>
                  <Item original={`${ImagePath}/${item}`} width="1024" height="768">
                    {({ ref, open }) => (
                      <Link href={Href} onClick={open}>
                        <div className="overflow-hidden">
                          <Image width={370} height={245} ref={ref} src={`${ImagePath}/${item}`} alt="" />
                        </div>
                      </Link>
                    )}
                  </Item>
                </figure>
              </Col>
            ))}
        </Gallery>
      </Row>
    </CardBody>
  );
};
