import { Container, Row } from "reactstrap";
import AddProjectsAndUpload from "./AddProjectsAndUpload/AddProjectsAndUpload";
import EditProfileForm from "./EditProfiles/EditProfileForm";
import MyProfile from "./MyProfile/MyProfile";

const EditProfileContainer = () => {
  return (
    <Container fluid>
      <div className="edit-profile">
        <Row>
          <MyProfile />
          <EditProfileForm />
          <AddProjectsAndUpload />
        </Row>
      </div>
    </Container>
  );
};

export default EditProfileContainer;
