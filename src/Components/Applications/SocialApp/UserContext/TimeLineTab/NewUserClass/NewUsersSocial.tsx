import { ELANAHeading, ImagePath } from "@/Constants";
import Image from "next/image";
import { MoreVertical } from "react-feather";

const NewUsersSocial = () => {
  return (
    <div className="new-users-social">
     <div className="d-flex">
        <Image height={50} width={50} className="h-auto rounded-circle image-radius m-r-15" src={`${ImagePath}/user/1.jpg`} alt="user121"/>
        <div className="flex-grow-1">
          <h4 className="mb-0 f-w-700">{ELANAHeading}</h4>
          <p>January, 12,2024</p>
        </div>
        <span className="pull-right mt-0">
          <MoreVertical />
        </span>
      </div>
    </div>
  );
};

export default NewUsersSocial;
