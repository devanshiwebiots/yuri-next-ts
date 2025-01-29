import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";
import { WarningModes, AlertMode } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { WarningModeData } from "@/Data/BonusUi/SweetAlert";

const WarningMode = () => {
  const displayAlert = () => {
    SweetAlert.fire({ icon: "warning", title: "Good job!", text: "You clicked the button!", confirmButtonColor: "#7A70BA" });
  };

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal title-line">
        <CommonCardHeader title={WarningModes} subTitle={WarningModeData} />
        <CardBody className="btn-showcase">
          <Button color="warning" className="sweet-6" onClick={displayAlert}>{AlertMode}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WarningMode;
