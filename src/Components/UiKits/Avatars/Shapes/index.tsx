import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath, Shapes } from "@/Constants";
import { AvatarShapesData, AvatarShapesSubTitle } from "@/Data/UiKits/Avatars";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const AvatarShapes = () => {
  return (
    <Col xl="4" md="6">
      <Card className=" height-equal title-line">
        <CommonCardHeader subTitle={AvatarShapesSubTitle} title={Shapes} />
        <CardBody>
          <div className="avatars avatar-showcase">
            {AvatarShapesData.map((item, index) => (
              <div key={index} className="avatar">
                <Image height={item.size} width={item.size} className={`img-${item.size} ${item.class}`} src={`${ImagePath}/avtar/${item.image}.jpg`} alt="user profile" />
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AvatarShapes;
