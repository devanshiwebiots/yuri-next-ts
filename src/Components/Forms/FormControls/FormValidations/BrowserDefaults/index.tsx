import { Card, Col } from "reactstrap";
import { BrowserDefault } from "@/Constants";
import { BrowserDefaultsCardBody } from "./BrowserDefaultsCardBody";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BrowserDefaultData } from "@/Data/Forms";

const BrowserDefaults = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={BrowserDefault} subTitle={BrowserDefaultData} />
        <BrowserDefaultsCardBody/>
      </Card>
    </Col>
  );
};

export default BrowserDefaults;
