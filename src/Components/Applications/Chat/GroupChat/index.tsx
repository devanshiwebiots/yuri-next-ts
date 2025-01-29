import { useAppDispatch } from "@/ReduxToolkit/Hooks";
import { fetchChatApiData, fetchChatMemberApiData } from "@/ReduxToolkit/Reducers/ChatSlice";
import { useEffect } from "react";
import { Container, Row } from "reactstrap";
import { LeftSideBar } from "../PrivateChat/LeftSideBar";
import UserGroupChat from "./UserGroupChat";

const GroupChatContainer = () => {
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
          <UserGroupChat />
        </Row>
      </Container>
    </>
  );
};

export default GroupChatContainer;
