import { ImagePath } from "@/Constants";
import Image from "next/image";
import { Col, Row } from "reactstrap";
import UserSocialMedia from "../ProfileUser/UserSocialMedia";

export const CommonUserHeader = (props: any) => {  
  return (
    <Row>
      <Col sm="8">
        <div className="d-flex">
          <Image width={50} height={50} className="img-thumbnail rounded-circle me-3" src={`${ImagePath}/user/7.jpg`} alt="Generic placeholder img" />
          <div className="flex-grow-1 align-self-center">
            <h3 className="mt-0 user-name">JOHAN DIO</h3>
            <div className="tour-wrapper"><span>{props.date ? props.date : '26 Jan'}</span><i className="tour-dot fa fa-circle"></i><span className="txt-danger">{props.hours ? props.hours : '6 min read'}</span></div>
          </div>
        </div>
      </Col>
      <div className="col-sm-4 align-self-center mt-0 text-end">
        <div className="social-media social-tour" data-intro="This is your social details">
          <UserSocialMedia />
        </div>
        <div className="float-sm-end"><small>{props.time ? props.time : '10 Hours ago'}</small></div>
      </div>

    </Row>
  );
};
