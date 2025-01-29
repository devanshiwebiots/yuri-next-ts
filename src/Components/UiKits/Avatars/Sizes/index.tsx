import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath, Sizes } from "@/Constants";
import { AvatarSizesData, AvatarSizesSubtitle } from "@/Data/UiKits/Avatars";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const AvatarSizes = () => {
  return (
    <Col xl="4" md="6">
      <Card className=" height-equal title-line">
        <CommonCardHeader subTitle={AvatarSizesSubtitle} title={Sizes} />
        <CardBody>
          <div className="avatars avatar-showcase">
            {AvatarSizesData.map((item, index) => (
              <div key={index} className="avatar">
                <Image height={item.height} width={item.height} className={`img-${item.height} rounded-circle`} src={`${ImagePath}/avtar/${item.image}.jpg`} alt="user profile" />
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AvatarSizes;
