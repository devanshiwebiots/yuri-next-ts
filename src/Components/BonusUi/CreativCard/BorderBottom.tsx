import { BottomBorder } from "@/Constants";
import { BorderBottomData, BorderBottomText1, BorderBottomText2, BorderBottomTextEm } from "@/Data/BonusUi/CreativeCard";
import { Card, CardBody, Col } from "reactstrap";
import CommonCreativeCardHeader from "./Common/CommonCreativeCardHeader";

const BorderBottom = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCreativeCardHeader headerClass="border-b-info" title={BottomBorder} subTitle={BorderBottomData} />
        <CardBody>
          <p className="mb-0">
            {BorderBottomText1}
            <em className="txt-danger">{BorderBottomTextEm}</em>
            {BorderBottomText2}
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderBottom;
