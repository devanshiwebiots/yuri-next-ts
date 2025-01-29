import { ImagePath } from "@/Constants";
import Image from "next/image";

export default function ProfileHeader() {
  return (
    <div className="d-flex align-items-center gap-2 flex-wrap">
      <div className="media-size-email">
        <img className="h-auto img-40 rounded-circle" src={`${ImagePath}/user/user.png`} alt="" />
      </div>
      <div className="flex-grow-1">
        <h6 className="f-w-600">{"Michael A. Woods"}</h6>
        <p>{"MichaelAWoods@jourrapide.com"}</p>
      </div>
    </div>
  );
}
