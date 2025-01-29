import { ProfileData1 } from "@/Data/Users";
import { Card, Col } from "reactstrap";
import CommonUserFooter from "./Common/CommonUserFooter";
import { CommonUserHeader } from "./Common/CommonUserHeader";

const ThirdData = () => {
  return (
    <Col sm="12">
      <Card>
        <div className="profile-img-style">
          <CommonUserHeader date={'15 Dec'} hours={'10 min read'} time={'2 months ago'}  />
          <hr />
          <p>{ProfileData1}</p>
          <CommonUserFooter listClass="mt-4" />
        </div>
      </Card>
    </Col>
  );
};

export default ThirdData;
