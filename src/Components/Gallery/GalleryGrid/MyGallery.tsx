import { Href, ImagePath } from "@/Constants";
import { GalleryGridImages } from "@/Data/Gallery";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Col } from "reactstrap";

export const MyGallery = () => {
  return (
    <Gallery>
      {GalleryGridImages.map((item, index) => (
        <Col xl="3" md="4" xs="6" key={index}>
          <figure className=" m-0">
            <Item original={`${ImagePath}/${item}`} width="1500" height="850">
              {({ ref, open }) => (
                <Link href={Href} onClick={open}>
                  <Image height={500} width={500} className="img-thumbnail mb-4 p-2" ref={ref} src={`${ImagePath}/${item}`} alt="image" />
                </Link>
              )}
            </Item>
          </figure>
        </Col>
      ))}
    </Gallery>
  );
};
