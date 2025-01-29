import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";
import { BloodHoundHeading } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BloodHoundData, StateOfUsa } from "@/Data/Forms";

const BloodHound = () => {
  return (
    <Col sm="12" md="6">
      <Card className="title-line">
        <CommonCardHeader title={BloodHoundHeading} subTitle={BloodHoundData} />
        <CardBody>
          <div id="bloodhound">
            <Form className="theme-form">
              <div>
                <Typeahead options={StateOfUsa} placeholder="States of USA" id="BloodHound" />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BloodHound;
