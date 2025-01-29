import { BorderLefts } from "@/Constants";
import { BorderLeftData, BorderLeftText1 } from "@/Data/BonusUi/CreativeCard";
import { Card, CardBody, Col } from "reactstrap";
import CommonCreativeCardHeader from "./Common/CommonCreativeCardHeader";

const BorderLeft = () => {

  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCreativeCardHeader headerClass="border-l-primary" title={BorderLefts} subTitle={BorderLeftData} />
        <CardBody>
          <p>
            {BorderLeftText1}
            <br />
            <strong>Visit Us: </strong> 2600 Hollywood Blvd,Florida, United States- 33020
            <br />
            <strong>Mail Us:</strong>contact@us@gmail.com
            <br />
            <strong>Contact Number: </strong>(954) 357-7760
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderLeft;
