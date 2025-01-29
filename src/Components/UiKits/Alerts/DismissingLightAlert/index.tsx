import React, { useState } from "react";
import { Alert, Button, Card, CardBody, Col } from "reactstrap";
import { Bell } from "react-feather";
import { DismissingLightAlert } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DismissingLightSubTitle } from "@/Data/UiKits/Alerts";

const DismissingLightAlerts = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader
          title={DismissingLightAlert}
          subTitle={DismissingLightSubTitle}
        />
        <CardBody>
          <Alert fade color="light-primary" isOpen={visible} toggle={onDismiss}>
            <Bell />
            <p>
              Hidden content You should check in on some of those fields below.
            </p>
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DismissingLightAlerts;
