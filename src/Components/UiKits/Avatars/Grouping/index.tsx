import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Grouping, ImagePath } from "@/Constants";
import { AvatarGroupingSubTitle } from "@/Data/UiKits/Avatars";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const AvatarGrouping = () => {
  return (
    <Col md="6">
      <Card className=" height-equal title-line">
        <CommonCardHeader subTitle={AvatarGroupingSubTitle} title={Grouping} />
        <CardBody className="card-body">
          <div className="avatars avatar-showcase">
            <div className="customers d-inline-block avatar-group">
              <ul>
                <li className="d-inline-block">
                  <Image
                    height={100}
                    width={100}
                    className="img-100 b-r-8"
                    src={`${ImagePath}/avtar/10.jpg`}
                    alt="user profile"
                  />
                </li>
                <li className="d-inline-block">
                  <Image
                    height={80}
                    width={80}
                    className="img-80 b-r-30"
                    src={`${ImagePath}/avtar/4.jpg`}
                    alt="user profile"
                  />
                </li>
                <li className="d-inline-block">
                  <Image
                    height={50}
                    width={50}
                    className="img-50 b-r-35"
                    src={`${ImagePath}/avtar/8.jpg`}
                    alt="user profile"
                  />
                </li>
              </ul>
            </div>
            <div className="customers d-inline-block avatar-group">
              <ul>
                <li className="d-inline-block">
                  <Image
                    height={50}
                    width={50}
                    className="img-60 rounded-circle"
                    src={`${ImagePath}/avtar/11.jpg`}
                    alt="user profile"
                  />
                </li>
                <li className="d-inline-block">
                  <Image
                    height={80}
                    width={80}
                    className="b-r-8 img-80"
                    src={`${ImagePath}/avtar/9.jpg`}
                    alt="user profile"
                  />
                </li>
                <li className="d-inline-block">
                  <Image
                    height={60}
                    width={60}
                    className="img-60 rounded-circle"
                    src={`${ImagePath}/avtar/4.jpg`}
                    alt="user profile"
                  />
                </li>
              </ul>
            </div>
            <div className="customers d-inline-block avatar-group">
              <ul>
                <li className="d-inline-block">
                  <Image
                    height={40}
                    width={40}
                    className="img-40 rounded-circle"
                    src={`${ImagePath}/avtar/1.jpg`}
                    alt="user profile"
                  />
                </li>
                <li className="d-inline-block">
                  <Image
                    height={40}
                    width={40}
                    className="img-40 rounded-circle"
                    src={`${ImagePath}/avtar/2.jpg`}
                    alt="user profile"
                  />
                </li>
                <li className="d-inline-block">
                  <Image
                    height={40}
                    width={40}
                    className="img-40 rounded-circle"
                    src={`${ImagePath}/avtar/3.jpg`}
                    alt="user profile"
                  />
                </li>
              </ul>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AvatarGrouping;
