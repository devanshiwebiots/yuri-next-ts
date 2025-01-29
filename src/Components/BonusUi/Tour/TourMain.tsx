import { Container, Row } from "reactstrap";
import { useEffect } from "react";
import UserProfileFirstStyle from "./UserProfileFirstStyle";
import UserProfileSecondStyle from "./UserProfileSecondStyle";
import UserProfileThirdStyle from "./UserProfileThirdStyle";
import UserProfileFourthStyle from "./UserProfileFourthStyle";
import UserProfileFifthStyle from "./UserProfileFifthStyle";

const TourMain = () => {
  return (
    <>
      <Container fluid>
        <div className="user-profile">
          <Row>
            <UserProfileFirstStyle />
            <UserProfileSecondStyle />
            <UserProfileThirdStyle />
            <UserProfileFourthStyle />
            <UserProfileFifthStyle />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default TourMain;
