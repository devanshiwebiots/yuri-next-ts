import { Href, ImagePath } from "@/Constants";
import { ProfileData } from "@/Data/Users";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Card, Col, Row } from "reactstrap";
import CommonUserFooter from "./Common/CommonUserFooter";
import { CommonUserHeader } from "./Common/CommonUserHeader";

const ForthData = () => {
  return (
    <Col sm="12">
      <Card>
        <div className="profile-img-style">
          <CommonUserHeader date={'5 Feb'} hours={'5 min read'} time={'10 Hours ago'} />
          <hr />
          <Row>
            <Col lg="12" xl="4">
              <div className="my-gallery">
                <Gallery withCaption>
                  <figure className="m-0">
                    <Item original={`${ImagePath}/blog/img.png`} width="1600" height="800" caption="Image Caption 1">
                      {({ ref, open }) => (
                        <a href={Href} onClick={open}>
                          <Image width={497} height={320} className="img-fluid rounded" ref={ref} src={`${ImagePath}/blog/img.png`} alt="image" />
                        </a>
                      )}
                    </Item>
                  </figure>
                </Gallery>
              </div>
              <CommonUserFooter listClass="mt-4 like-comment-sm-mb" />
            </Col>
            <Col xl="6">
              <p>{ProfileData}</p>
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
};

export default ForthData;
