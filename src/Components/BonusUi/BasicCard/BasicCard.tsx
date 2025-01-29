import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicCards } from "@/Constants";
import { BasicCardData, BasicCardText1, BasicCardText2 } from "@/Data/BonusUi/BasicCard";
import { Card, CardBody, Col } from "reactstrap";

const BasicCard = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="title-line">
        <CommonCardHeader  title={BasicCards} subTitle={BasicCardData} />
        <CardBody>
          <p className="mb-0">
            {BasicCardText1}
            <em className="txt-danger">“module tabs”</em>
            {BasicCardText2}
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicCard;
