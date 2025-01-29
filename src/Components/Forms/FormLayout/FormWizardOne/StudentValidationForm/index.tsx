import { Card, Col, CardBody } from "reactstrap";
import StudentValidationFormCardBody from "./StudentValidationFormCardBody";
import { StudentValidationFormHeading } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { StudentValidationData } from "@/Data/Forms";

const StudentValidationForm = () => {
  return (
    <Col xl="6">
      <Card className="height-equal title-line">
        <CommonCardHeader title={StudentValidationFormHeading} subTitle={StudentValidationData}/>
        <CardBody className="custom-input ">
          <StudentValidationFormCardBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default StudentValidationForm;
