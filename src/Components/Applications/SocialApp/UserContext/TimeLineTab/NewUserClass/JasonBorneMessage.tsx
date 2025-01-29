import { ImagePath } from "@/Constants";
import Image from "next/image";

const JasonBorneMessage = () => {
  return (
    <div className="your-msg">
      <div className="d-flex">
        <Image height={50} width={50} className="img-50 img-fluid m-r-20 rounded-circle" alt="user" src={`${ImagePath}/user/1.jpg`} />
        <div className="flex-grow-1">
          <span className="f-w-600">
            Jason Borne&nbsp;
            <span>
              1 Year Ago <i className="fa fa-reply font-primary" />
            </span>
          </span>
          <p> we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post</p>
        </div>
      </div>
    </div>
  );
};

export default JasonBorneMessage;
