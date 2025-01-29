import { Href, ImagePath, MyPortfolioTitle } from "@/Constants";
import { GalleryGridImages, description } from "@/Data/Gallery";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Col } from "reactstrap";

export const DescriptionMyGallery = () => {
  return (
    <Gallery withCaption>
      {GalleryGridImages.map((item, index) => (
        <Col xl="3" sm="6" key={index}>
          <figure className=" m-0" itemProp="caption description">
            <Item original={`${ImagePath}/${item}`} width="1500" height="850" caption={description}>
              {({ ref, open }) => (
                <Link href={Href} onClick={open}>
                  <Image height={500} width={500} className="img-thumbnail border-bottom-0 p-2 rounded-0 rounded-top-1" ref={ref} src={`${ImagePath}/${item}`} alt="thumbnail" />
                  <div className="caption border-top-0 p-2">
                    <h4>{MyPortfolioTitle}</h4>
                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                  </div>
                </Link>
              )}
            </Item>
          </figure>
        </Col>
      ))}
    </Gallery>
  );
};
