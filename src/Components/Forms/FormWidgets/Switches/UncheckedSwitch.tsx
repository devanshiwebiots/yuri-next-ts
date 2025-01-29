import { Card, CardBody, Col, Label } from "reactstrap";
import { UncheckedSwitches } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { UncheckedSwitchData, UncheckedSwitchDataList } from "@/Data/Forms";
import CommonSwitchSpan from "./Common/CommonSwitchSpan";

const UncheckedSwitch = () => {
  return (
    <Col xl="4" sm="6">
      <Card className="height-equal title-line">
        <CommonCardHeader title={UncheckedSwitches} subTitle={UncheckedSwitchData} />
        <CardBody className="common-flex flex-column switch-wrapper">
          {UncheckedSwitchDataList.map(({ color, text }, index) => (
            <div className="d-flex align-items-center" key={index}>
              <div className="text-end">
                <CommonSwitchSpan color={color} defaultChecked />
              </div>
              <Label className="m-l-10" check>{text}</Label>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default UncheckedSwitch;
