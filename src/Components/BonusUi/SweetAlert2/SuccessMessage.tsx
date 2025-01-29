import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";
import { SuccessMessages, LoginSuccessfully } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SuccessMeassageData } from "@/Data/BonusUi/SweetAlert";

const SuccessMessage = () => {
  const displayAlert = () => {
    SweetAlert.fire({ icon: "success", title: "Good job!", text: "You clicked the button!", confirmButtonColor:"#7A70BA" });
  };
  
  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal title-line">
        <CommonCardHeader title={SuccessMessages} subTitle={SuccessMeassageData} />
        <CardBody className="btn-showcase">
          <Button color="success" className="sweet-8" type="button" onClick={displayAlert}>{LoginSuccessfully}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SuccessMessage;
