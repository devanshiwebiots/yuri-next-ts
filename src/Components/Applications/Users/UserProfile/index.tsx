import { Container, Row } from "reactstrap";
import FirstData from "./FirstData";
import ForthData from "./ForthData";
import UserData from "./ProfileUser/UserData";
import SecondData from "./SecondData";
import ThirdData from "./ThirdData";

const UsersProfileContainer = () => {
  return (
    <Container fluid>
      <div className="user-profile">
        <Row>
          <UserData />
          <FirstData />
          <SecondData />
          <ThirdData />
          <ForthData />
        </Row>
      </div>
    </Container>
  );
};

export default UsersProfileContainer;
