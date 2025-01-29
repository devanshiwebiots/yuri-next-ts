import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { MultipleSectionWithHeader } from "@/Constants";
import { MultiWithHeaderData, MultipleSectionHeaderData } from "@/Data/Forms";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";

const MultipleSectionsWithHeaders = () => { 
  return (
    <Col sm="12" md="6">
      <Card className="title-line">
        <CommonCardHeader title={MultipleSectionWithHeader} subTitle={MultipleSectionHeaderData} />
        <CardBody>
          <div id="multiple-datasets">
            <Form className="theme-form">
              <div>
                <Typeahead id="multiple-typeahead" labelKey={"name"} multiple options={MultiWithHeaderData} placeholder="Choose a state..." clearButton />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MultipleSectionsWithHeaders;
