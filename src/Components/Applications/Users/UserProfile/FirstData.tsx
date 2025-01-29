import { Href, ImagePath } from "@/Constants";
import { ProfileData } from "@/Data/Users";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Card, Col } from "reactstrap";
import CommonUserFooter from "./Common/CommonUserFooter";
import { CommonUserHeader } from "./Common/CommonUserHeader";

const FirstData = () => {
  return (
    <Col sm="12">
      <Card>
        <div className="profile-img-style">
          <CommonUserHeader date={'26 Jan'} hours={'6 min read'} time={'10 Hours ago'} />
          <hr />
          <p>{ProfileData}</p>
          <div className="img-container">
            <div className="my-gallery w-100" id="aniimated-thumbnials" itemScope>
              <Gallery withCaption>
                <figure className="m-0">
                  <Item original={`${ImagePath}/other-images/profile-style-img3.png`} width="1600" height="800" caption="Image Caption 1">
                    {({ ref, open }) => (
                      <a href={Href} onClick={open}>
                        <Image width={1539} height={445} className="img-fluid rounded" ref={ref} src={`${ImagePath}/other-images/profile-style-img3.png`} alt="image" />
                      </a>
                    )}
                  </Item>
                </figure>
              </Gallery>
            </div>
          </div>
          <CommonUserFooter />
        </div>
      </Card>
    </Col>
  );
};

export default FirstData;
