import { ImagePath, WilliamJennings } from "@/Constants";
import { CommonTourHeaderProp } from "@/Types/BonusUi";
import Image from "next/image";
import { Col } from "reactstrap";

const CommonTourHeader:React.FC<CommonTourHeaderProp> = ({ date, time }) => {
  return (
    <Col sm="8">
      <div className="d-flex">
        <Image width={40} height={40} className="img-thumbnail rounded-circle me-3" src={`${ImagePath}/user/7.jpg`} alt="Generic placeholder image" />
        <div className="flex-grow-1 align-self-center">
          <h5 className="mt-0 user-name">{WilliamJennings}</h5>
          <div className="tour-wrapper">
            <span>{date}</span>
            <i className="tour-dot fa fa-circle"></i>
            <span className="txt-danger">{time}</span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CommonTourHeader;
