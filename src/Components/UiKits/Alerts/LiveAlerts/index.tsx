import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LiveAlerts, ShowLiveAlert } from "@/Constants";
import { LiveAlertSubTitle } from "@/Data/UiKits/Alerts";
import { useState } from "react";
import { Alert, Button, Card, CardBody, Col } from "reactstrap";

const LiveAlert = () => {
  const [data, setData] = useState<string[]>([]);

  const dataShown = (key: number) => {
    setData(data.filter((item, index) => index !== key));
  };

  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={LiveAlerts} subTitle={LiveAlertSubTitle} />
        <CardBody className="live-dark">
          {data.length > 0 &&
            data.map((item, index) => (
              <Alert
                fade
                color="light-danger"
                className="alert-dismissible"
                key={index}
              >
                <p className="text-dark">
                  Nice, you triggered this alert message!
                </p>
                <Button close onClick={() => dataShown(index)}></Button>
              </Alert>
            ))}
          <Button
            color="danger"
            onClick={() => setData(() => [...data, "Alerts"])}
          >
            {ShowLiveAlert}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LiveAlert;
