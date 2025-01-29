import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DismissingDarkAlert } from "@/Constants";
import { DismissingDarkSubTitle } from "@/Data/UiKits/Alerts";
import { useState } from "react";
import { Heart } from "react-feather";
import { Alert, Card, CardBody, Col } from "reactstrap";

const DismissingDarkAlerts = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader
          title={DismissingDarkAlert}
          subTitle={DismissingDarkSubTitle}
        />
        <CardBody>
          <Alert fade color="dark" isOpen={visible} toggle={onDismiss}>
            <Heart />
            <p>
              Check your update! You should check in on some of those fields
              below.
            </p>
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DismissingDarkAlerts;
