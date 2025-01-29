import { Friends, ImagePath } from "@/Constants";
import { FriendsImages } from "@/Data/SocialApp";
import { useState } from "react";
import { Card, CardBody, Collapse } from "reactstrap";
import HeaderWithIcon from "../HeaderWithIcon";
import Image from "next/image";

const FriendsCard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={Friends} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Collapse isOpen={isOpen}>
        <CardBody className="avatar-showcase filter-cards-view">
        <ul className="common-flex justify-content-center">
          {FriendsImages.map((data, index) => (
            <li key={index}>
              <Image width={50} height={50} className="img-50 rounded-circle" src={`${ImagePath}/user/${data}`} alt="images"/>
            </li>
          ))}
        </ul>
        </CardBody>
      </Collapse>
    </Card>
  );
};

export default FriendsCard;
