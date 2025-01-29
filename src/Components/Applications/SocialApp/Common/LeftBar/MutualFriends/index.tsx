import { MutualFriend } from "@/Constants";
import { useState } from "react";
import { Card } from "reactstrap";
import HeaderWithIcon from "../../HeaderWithIcon";
import MutualFriendsCollapse from "./MutualFriendsCollapse";

const MutualFriends = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={MutualFriend} isOpen={isOpen} setIsOpen={setIsOpen} />
      <MutualFriendsCollapse isFilter={isOpen} />
    </Card>
  );
};

export default MutualFriends;
