import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { EditProfile, UpdateProfile } from "@/Constants";
import { Button, Card, CardFooter, Col, Form } from "reactstrap";
import { EditProfileFormBody } from "./EditProfileFormBody";

const EditProfileForm = () => {
  return (
    <Col xl="8">
      <Form onSubmit={(event) => event.preventDefault()}>
        <Card>
          <CommonCardHeader title={EditProfile} />
          <EditProfileFormBody />
          <CardFooter className="text-end">
            <Button color="primary">{UpdateProfile}</Button>
          </CardFooter>
        </Card>
      </Form>
    </Col>
  );
};

export default EditProfileForm;
