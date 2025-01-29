import { Card, CardBody, Col, Input, Label } from "reactstrap";
import { SwitchSizings } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SwitchSizingData, SwitchSizingDataList } from "@/Data/Forms";

const SwitchSizing = () => {
  return (
    <Col md="12">
      <Card className="title-line">
        <CommonCardHeader title={SwitchSizings} subTitle={SwitchSizingData} />
        <CardBody className="common-flex switch-wrapper">
          {SwitchSizingDataList.map(({ label, flexClass, defaultChecked, disabled }, index) => (
            <div className="d-flex" key={index}>
              <Label className="col-form-label m-r-10" check>{label}</Label>
              <div className={`flex-grow-1 text-end ${flexClass}`}>
                <Label className="switch">
                  <Input type="checkbox" defaultChecked={defaultChecked} disabled={disabled} />
                  <span className="switch-state"></span>
                </Label>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default SwitchSizing;
