import { TopBorder } from "@/Constants";
import { BorderTopData, BorderTopText1, BorderTopText2, BorderTopTextEm } from "@/Data/BonusUi/CreativeCard";
import { Card, CardBody, Col } from "reactstrap";
import CommonCreativeCardHeader from "./Common/CommonCreativeCardHeader";

const BorderTop = () => {
 
  return (
    <Col sm="12" md="6">
      <Card className="b-t-0">
        <CommonCreativeCardHeader headerClass="border-t-danger" title={TopBorder} subTitle={BorderTopData} />
        <CardBody>
          <p className="mb-0">{BorderTopText1}<em className="txt-danger">{BorderTopTextEm}</em>{BorderTopText2}</p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderTop;
