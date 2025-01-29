import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";
import { ScrollableDropDownMenu } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CountryDataList, ScrollableDropdownData } from "@/Data/Forms";

const ScrollableDropdownMenu = () => {
  return (
    <Col sm="12" md="6">
      <Card className="title-line">
        <CommonCardHeader title={ScrollableDropDownMenu} subTitle={ScrollableDropdownData} />
        <CardBody>
          <div id="scrollable-dropdown-menu">
            <Form className="theme-form">
              <div>
                <Typeahead options={CountryDataList} placeholder="Countries" id="Scrollable DropdownMenu"/>
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ScrollableDropdownMenu;
