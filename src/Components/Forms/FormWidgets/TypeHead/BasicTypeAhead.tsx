import { Typeahead } from "react-bootstrap-typeahead";
import { Card, Col, CardBody, Form } from "reactstrap";
import { BasicTypeaheads } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicTypeHeadData, StateOfUsa } from "@/Data/Forms";

const BasicTypeAhead = () => {
  return (
    <Col sm="12" md="6">
      <Card className="title-line">
        <CommonCardHeader title={BasicTypeaheads} subTitle={BasicTypeHeadData} />
        <CardBody>
          <div id="the-basics">
            <Form className="theme-form">
              <div>
                <Typeahead options={StateOfUsa} placeholder="States of USA" id="Basic TypeAhead" />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTypeAhead;
