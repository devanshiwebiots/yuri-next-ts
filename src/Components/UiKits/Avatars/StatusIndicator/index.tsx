import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath, StatusIndicator } from "@/Constants";
import { StatusIndicatorAvatarsData, StatusIndicatorAvatarsSubTitle } from "@/Data/UiKits/Avatars";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const StatusIndicatorAvatars = () => {
  return (
    <Col xl="4" md="6">
      <Card className=" height-equal title-line">
        <CommonCardHeader title={StatusIndicator} subTitle={StatusIndicatorAvatarsSubTitle} />
        <CardBody>
          <div className="avatars avatar-showcase">
            {StatusIndicatorAvatarsData.map((item, index) => (
              <div key={index} className="avatar">
                <Image height={item.size} width={item.size} className={`img-${item.size} rounded-circle`} src={`${ImagePath}/avtar/${item.image}.jpg`} alt="user profile" />
                <div className={`status bg-${item.badge}`} />
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StatusIndicatorAvatars;
