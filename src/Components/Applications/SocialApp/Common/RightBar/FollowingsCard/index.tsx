import { Card } from "reactstrap";
import FollowingsCardCollapse from "./FollowingsCardCollapase";
import { useState } from "react";
import HeaderWithIcon from "../../HeaderWithIcon";
import { Following } from "@/Constants";

const FollowingsCard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={Following} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <FollowingsCardCollapse isFilter={isOpen} />
    </Card>
  );
};

export default FollowingsCard;
