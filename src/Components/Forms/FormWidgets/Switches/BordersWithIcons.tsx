import { Card, CardBody, Col, Label } from "reactstrap";
import { BordersWithIcon } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BorderIconSwitchData, BorderIconSwitchDataList } from "@/Data/Forms";
import CommonSwitchSpan from "./Common/CommonSwitchSpan";

const BordersWithIcons = () => {
  return (
    <Col xl="4">
      <Card className="height-equal title-line">
        <CommonCardHeader title={BordersWithIcon} subTitle={BorderIconSwitchData} />
        <CardBody className="common-flex flex-column switch-wrapper ">
          {BorderIconSwitchDataList.map(({ color, text }, index) => (
            <div className="d-flex align-items-center" key={index}>
              <div className="text-end icon-state switch-outline">
                <CommonSwitchSpan color={color} defaultChecked />
              </div>
              <Label className="m-l-10" check>{text}</Label>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}

export default BordersWithIcons