import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath, Ratio } from "@/Constants";
import { AvatarRatioData, AvatarRatioSubTitle } from "@/Data/UiKits/Avatars";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const AvatarRatio = () => {
  return (
    <Col  md="6">
      <Card className=" height-equal title-line">
        <CommonCardHeader subTitle={AvatarRatioSubTitle} title={Ratio} />
        <CardBody>
          <div className="avatars avatar-showcase">
            {AvatarRatioData.map((item, index) => (
              <div key={index} className="avatar ratio">
                <Image
                  className={`b-r-8 img-${item.size}`}
                  height={item.size}
                  width={item.size}
                  src={`${ImagePath}/avtar/${item.image}.jpg`}
                  alt="user profile"
                />
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AvatarRatio;
