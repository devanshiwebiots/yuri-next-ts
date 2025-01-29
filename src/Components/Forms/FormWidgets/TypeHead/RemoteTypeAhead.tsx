import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";
import { RemotetypeAheadHeading } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { MoviesList, RemoteTypeHeadData } from "@/Data/Forms";

const RemoteTypeAhead = () => {
  return (
    <Col sm="12" md="6">
      <Card className="title-line">
        <CommonCardHeader title={RemotetypeAheadHeading} subTitle={RemoteTypeHeadData} />
        <CardBody>
          <div id="remote">
            <Form className="theme-form">
              <div>
                <Typeahead options={MoviesList} placeholder="Choose Option" id="Remote TypeAhead"/>
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RemoteTypeAhead;
