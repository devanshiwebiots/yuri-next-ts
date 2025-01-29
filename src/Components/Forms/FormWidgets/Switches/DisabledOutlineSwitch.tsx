import { Card, CardBody, Col } from "reactstrap";
import { DisabledOutlineSwitches } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DisableOutlineSwitchData, DisableOutlineSwitchDataList } from "@/Data/Forms";
import CommonSwitchSpan from "./Common/CommonSwitchSpan";

const DisabledOutlineSwitch = () => {
  return (
    <Col md="6">
      <Card className="title-line">
        <CommonCardHeader title={DisabledOutlineSwitches} subTitle={DisableOutlineSwitchData} />
        <CardBody className="common-flex">
          {DisableOutlineSwitchDataList.map((item, index) => (
            <div className="d-flex" key={index}>
              <div className="flex-grow-1 text-end icon-state switch-outline">
                <CommonSwitchSpan key={index} color={item} />
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default DisabledOutlineSwitch;
