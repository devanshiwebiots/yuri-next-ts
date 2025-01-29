import { ImagePath } from "@/Constants";
import { SocialAppCallBackType } from "@/Types/SocialAppType";
import Image from "next/image";
import { Card, Col, Row } from "reactstrap";
import NavBarMain from "./NavBarMain";
import UserProfileIcon from "./UserProfileIcon";

const UserProfile: React.FC<SocialAppCallBackType> = ({ callback }) => {
  return (
    <Row>
      <Col sm="12" className="box-col-12">
        <Card className="hovercard text-center">
          <div className="cardheader socialheader" />
          <div className="user-image">
            <div className="avatar">
              <Image height={50} width={50} alt="user" src={`${ImagePath}/user/1.jpg`} />
            </div>
            <div className="icon-wrapper">
              <i className="icofont icofont-pencil-alt-5" />
            </div>
            <UserProfileIcon />
          </div>
          <div className="info market-tabs p-0">
            <NavBarMain callback={callback} />
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default UserProfile;
