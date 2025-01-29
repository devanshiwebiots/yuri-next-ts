import { Typeahead } from "react-bootstrap-typeahead";
import { Card, Col, CardBody, Form } from "reactstrap";
import { PreFetchHeading } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CountryDataList, PreFetchData } from "@/Data/Forms";

const PreFetch = () => {
  return (
    <Col sm="12" md="6">
      <Card className="title-line">
        <CommonCardHeader title={PreFetchHeading} subTitle={PreFetchData} />
        <CardBody>
          <div id="the-basics">
            <Form className="theme-form">
              <div>
                <Typeahead options={CountryDataList} placeholder="Countries" id="PreFetch"/>
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PreFetch;
