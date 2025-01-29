import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";
import { CustomTemplate } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CustomTemplateData, OscarWinnerData } from "@/Data/Forms";

const CustomTemplates = () => {
  return (
    <Col sm="12" md="6">
      <Card className="title-line">
        <CommonCardHeader title={CustomTemplate} subTitle={CustomTemplateData} />
        <CardBody>
          <div id="custom-templates">
            <Form className="theme-form">
              <div>
                <Typeahead options={OscarWinnerData} placeholder="Oscar winners" id="Custom Templates"/>
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomTemplates;
