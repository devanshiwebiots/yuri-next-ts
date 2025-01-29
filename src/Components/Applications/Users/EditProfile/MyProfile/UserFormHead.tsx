import { Designer, ImagePath } from "@/Constants";
import Image from "next/image";
import { Row } from "reactstrap";

export const UserFormHead = () => {
  return (
    <Row className="mb-2">
      <div className="profile-title">
        <Image width={70} height={70} className="img-70 rounded-circle" alt="" src={`${ImagePath}/user/7.jpg`} />
        <div className="flex-grow-1">
          <h4 className="mb-1 text-uppercase">Mark Jecno</h4>
          <p>{Designer}</p>
        </div>
      </div>
    </Row>
  );
};
