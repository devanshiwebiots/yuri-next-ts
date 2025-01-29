import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SegmentedButton, SegmentedButtonSecondary, SegmentedButtonSuccess } from "@/Constants";
import { SegmentButtonData, SegmentDataOne, SegmentDataTwo } from "@/Data/Forms";
import { Button, Card, CardBody, Col, Input, InputGroup } from "reactstrap";
import ButtonDropdownList from "./ButtonsWithDropdowns/Common/ButtonDropdownList";

const SegmentedButtons = () => {
  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonCardHeader title={SegmentedButton} subTitle={SegmentButtonData} />
        <CardBody className="main-segment-btn card-wrapper input-group-wrapper">
          <InputGroup>
            <Button color="success" outline>
              {SegmentedButtonSuccess}
            </Button>
            <ButtonDropdownList color="success" divider options={SegmentDataOne} />
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <Input type="text" />
            <Button color="secondary" outline>
              {SegmentedButtonSecondary}
            </Button>
            <ButtonDropdownList color="secondary" divider options={SegmentDataTwo} />
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SegmentedButtons;
