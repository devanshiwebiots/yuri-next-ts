import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LeftBorderAlerts } from "@/Constants";
import { LeftSubTitle } from "@/Data/UiKits/Alerts";
import { useState } from "react";
import { HelpCircle } from "react-feather";
import { Alert, Card, CardBody, Col } from "reactstrap";

const LeftBorderAlert = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={LeftBorderAlerts} subTitle={LeftSubTitle} />
        <CardBody className="live-dark">
          <Alert isOpen={visible} color="light-secondary"  className="light alert-dismissible fade show text-dark border-left-wrapper"
            toggle={onDismiss}
          >
            <HelpCircle />
            <p>You can check in on some of those fields below.</p>
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LeftBorderAlert;
