import { Card, CardBody, Col, Row } from "reactstrap";
import { VariationOfAddon } from "@/Constants";
import VariationAddonsFormContent from "./VariationAddonsFormContent";
import { VariationOfAddonsCardFooter } from "./VariationOfAddonsCardFooter";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { VariationOfAddonData } from "@/Data/Forms";

const VariationOfAddons = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={VariationOfAddon} subTitle={VariationOfAddonData} />
        <CardBody className="card-wrapper input-radius">
          <Row>
            <Col>
              <VariationAddonsFormContent />
            </Col>
          </Row>
        </CardBody>
        <VariationOfAddonsCardFooter />
      </Card>
    </Col>
  );
};

export default VariationOfAddons;
