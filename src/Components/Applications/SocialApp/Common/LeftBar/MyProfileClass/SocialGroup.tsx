import { ImagePath } from "@/Constants";
import { SocialGroupData } from "@/Data/SocialApp";
import Image from "next/image";

const SocialGroup = () => {
  return (
    <ul className="justify-content-center">
      {SocialGroupData.map((data, index) => (
        <li className="d-inline-block" key={index}>
          <Image height={50} width={50} className="h-auto img-40 rounded-circle" src={`${ImagePath}/user/${data.imageName}`} alt="Img" id={`UncontrolledTooltipExample-${index}`}/>
        </li>
      ))}
    </ul>
  );
};

export default SocialGroup;
