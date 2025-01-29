import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FlatCards } from "@/Constants";
import { FlatCardData, FlatCardText1, FlatCardText2, FlatCardTextEm } from "@/Data/BonusUi/BasicCard";
import { Card, CardBody, Col } from "reactstrap";

const FlatCard = () => {
 
  return (
    <Col sm="12" xl="6">
      <Card className="b-r-0 title-line">
        <CommonCardHeader title={FlatCards} subTitle={FlatCardData}/>
        <CardBody>
          <p className="mb-0">
            {FlatCardText1}<em className="txt-danger">{FlatCardTextEm}</em>{FlatCardText2}
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FlatCard;