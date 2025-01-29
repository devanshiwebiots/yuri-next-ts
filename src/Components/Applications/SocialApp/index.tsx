import { useCallback, useState } from "react";
import { Container } from "reactstrap";
import SocialAppTabContent from "./UserContext";
import UserProfile from "./UserProfile/UserProfile";

const SocialAppContainer = () => {
  const [activeTab, setActiveTab] = useState(1);
  const callback = useCallback((tab: number) => {
    setActiveTab(tab);
  }, []);

  return (
    <Container fluid>
      <div className="user-profile social-app-profile">
        <UserProfile callback={callback} />
        <SocialAppTabContent activeTab={activeTab} />
      </div>
    </Container>
  );
};

export default SocialAppContainer;
