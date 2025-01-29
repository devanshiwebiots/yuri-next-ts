import { Card, CardBody, Col, Label } from "reactstrap";
import { IconsSwitchs } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { IconSwitchData, IconSwitchDataList } from "@/Data/Forms";
import CommonSwitchSpan from "./Common/CommonSwitchSpan";

const Iconsswitch = () => {
  return (
    <Col xl="4" sm="6">
      <Card className="height-equal title-line">
        <CommonCardHeader title={IconsSwitchs} subTitle={IconSwitchData} />
        <CardBody className="common-flex flex-column switch-wrapper">
          {IconSwitchDataList.map(({ color, text }, index) => (
            <div className="d-flex align-items-center" key={index}>
              <div className="text-end icon-state">
                <CommonSwitchSpan color={color} defaultChecked/>
              </div>
              <Label className="m-l-10" check>{text}</Label>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Iconsswitch;
