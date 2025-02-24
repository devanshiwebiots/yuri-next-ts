import { useAppDispatch } from "@/ReduxToolkit/Hooks";
import { fetchChatApiData, fetchChatMemberApiData } from "@/ReduxToolkit/Reducers/ChatSlice";
import { useEffect } from "react";
import { Container, Row } from "reactstrap";
import { LeftSideBar } from "./LeftSideBar";
import UserChat from "./UserChat";

const PrivateChatContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchChatMemberApiData());
    dispatch(fetchChatApiData());
  }, []);

  return (
    <>
      <Container fluid>
        <Row className="g-0">
          <LeftSideBar />
          <UserChat />
        </Row>
      </Container>
    </>
  );
};

export default PrivateChatContainer;
