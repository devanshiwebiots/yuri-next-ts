import { ActivityFeed } from "@/Constants";
import { useState } from "react";
import { Card } from "reactstrap";
import HeaderWithIcon from "../../HeaderWithIcon";
import ActivityFeedCollapse from "./ActivityFeedCollapase";

const ActivityFeedClass = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={ActivityFeed} isOpen={isOpen} setIsOpen={setIsOpen} />
      <ActivityFeedCollapse isFilter={isOpen} />
    </Card>
  );
};

export default ActivityFeedClass;
