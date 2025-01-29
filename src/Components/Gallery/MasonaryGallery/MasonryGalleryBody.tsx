import { Href, ImagePath } from "@/Constants";
import { MasonryImageData, breakpointColumnsObj } from "@/Data/Gallery";
import Image from "next/image";
import Link from "next/link";
import Masonry from "react-masonry-css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { CardBody } from "reactstrap";

export const MasonryGalleryBody = () => {
  return (
    <CardBody className="photoswipe-pb-responsive me-3">
      <Gallery>
        <Masonry breakpointCols={breakpointColumnsObj} className="my-gallery row grid gallery" columnClassName="col-md-3 col-sm-6 grid-item">
          {MasonryImageData.map((element, index) => (
            <figure key={index} className="m-0">
              <Item original={`${ImagePath}/${element.src}`} width="700" height="850">
                {({ ref, open }) => (
                  <Link href={Href} onClick={open}>
                    <Image width={500} height={500} className="img-thumbnail mb-4" ref={ref} src={`${ImagePath}/${element.src}`} alt="images" />
                  </Link>
                )}
              </Item>
            </figure>
          ))}
        </Masonry>
      </Gallery>
    </CardBody>
  );
};
