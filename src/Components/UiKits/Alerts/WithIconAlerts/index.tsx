import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AlertsWithIconsTextActions } from "@/Constants";
import { WithIconAlertsSubTitle } from "@/Data/UiKits/Alerts";
import { useState } from "react";
import { Alert, Button, Card, CardBody, Col } from "reactstrap";

const AlertsWithIconsandTextActions = () => {
  const [visible, setVisible] = useState(true);
  const [visibleAlert, setVisibleAlert] = useState(true);
  const onDismiss = () => setVisible(false);
  const onDismissAlert = () => setVisibleAlert(false);

  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader
          title={AlertsWithIconsTextActions}
          subTitle={WithIconAlertsSubTitle}
        />
        <CardBody>
          <Alert
            color="transparent"
            fade
            isOpen={visible}
            className="border-primary alert-dismissible p-0"
          >
            <div className="alert-arrow bg-primary">
              <i className="icon-timer"></i>
            </div>
            <p>
              Your time Over after <strong className="txt-dark">5</strong>{" "}
              minute
            </p>
            <Button className="p-0 border-0 me-2 ms-auto" onClick={onDismiss}>
              <span className="bg-primary text-white px-3 py-1">Check</span>
            </Button>
          </Alert>
          <Alert
            color="transparent"
            fade
            isOpen={visibleAlert}
            className="border-secondary alert-dismissible p-0 mb-0"
          >
            <div className="alert-arrow bg-secondary">
              <i className="icon-heart"></i>
            </div>
            <p>
              Oh snap! Change a few things up{" "}
              <strong className="txt-dark"> Notification check</strong>
            </p>
            <Button
              className="p-0 border-0 me-2 ms-auto"
              onClick={onDismissAlert}
            >
              <span className="bg-secondary text-white px-3 py-1">Alert</span>
            </Button>
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AlertsWithIconsandTextActions;
