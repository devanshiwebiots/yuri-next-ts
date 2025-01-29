import { Href, ImagePath } from "@/Constants";
import { ProfileData, UserImages } from "@/Data/Users";
import Image from "next/image";
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Card, Col, Row } from "reactstrap";
import CommonUserFooter from "./Common/CommonUserFooter";
import { CommonUserHeader } from "./Common/CommonUserHeader";

const SecondData = () => {
  return (
    <Col sm="12">
      <Card>
        <div className="profile-img-style">
          <CommonUserHeader date={'22 Feb'} hours={'5 min read'} time={'4 Hours ago'} />
          <hr />
          <p>{ProfileData}</p>
          <Row className="mt-3 mb-4 pictures my-gallery">
            <Gallery withCaption>
              <Row className="mt-4 pictures my-gallery">
                {UserImages.map((item) => (
                  <Col sm="6" key={item}>
                    <figure className=" m-0">
                      <Item original={`${ImagePath}/other-images/profile-style-img3.png`} width="1600" height="800" caption="Image Caption 1">
                        {({ ref, open }) => (
                          <a href={Href} onClick={open}>
                            <Image width={758} height={350} className="img-fluid rounded" ref={ref} src={`${ImagePath}/other-images/profile-style-img.png`} alt="image" />
                          </a>
                        )}
                      </Item>
                    </figure>
                  </Col>
                ))}
              </Row>
            </Gallery>
          </Row>
          <CommonUserFooter />
        </div>
      </Card>
    </Col>
  );
};

export default SecondData;
