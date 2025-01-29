import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { RTLSupport } from "@/Constants";
import { CountryDataList, RtlSupportData } from "@/Data/Forms";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";

const RtlSupport = () => {
  return (
    <Col sm="12" md="6">
      <Card className="title-line">
        <CommonCardHeader title={RTLSupport} subTitle={RtlSupportData} />
        <CardBody>
          <div id="scrollable-dropdown-menu">
            <Form className="theme-form">
              <div className="rtl-typeahead">
                <Typeahead align="right"  options={CountryDataList} placeholder="Countries" id="RTL Support" />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RtlSupport;
