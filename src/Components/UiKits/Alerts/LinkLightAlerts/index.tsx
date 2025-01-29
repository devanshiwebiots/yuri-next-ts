import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, LinkColorInLightTheme } from "@/Constants";
import { LightAlertsData, LinkLightAlertsSubTitle } from "@/Data/UiKits/Alerts";
import { Fragment } from "react";
import { Alert, Card, CardBody, Col, Row } from "reactstrap";

const LinkLightAlerts = () => {
  return (
    <Col xl="12">
      <Card className="title-line">
        <CommonCardHeader title={LinkColorInLightTheme} subTitle={LinkLightAlertsSubTitle} />
        <CardBody>
          <Row>
            <Col xl="6">
              <p className="mb-1">Primary Light Alert</p>
              <Alert color="light-primary" role="alert">
                <p className="txt-primary">
                  This is a {" "}
                  <a className="alert-link txt-primary" href={Href}>
                    primary alert
                  </a>{" "}
                  with an example link.Check it out.
                </p>
              </Alert>
              {LightAlertsData.slice(1, 4).map((item, index) => (
                <Fragment key={index}>
                  <p className="mb-1">
                    {item.text}
                  </p>
                  <Alert color={`light-${item.color}`} role="alert">
                    <p className={`txt-${item.color}`}>
                      This is a {" "}
                      <a className={`alert-link txt-${item.color}`} href={Href}>
                        {item.link}
                      </a>{" "}
                      with an example link.Check it out.
                    </p>
                  </Alert>
                </Fragment>
              ))}
            </Col>
            <Col xl="6">
              {LightAlertsData.slice(4).map((item, index) => (
                <Fragment key={index}>
                  <p className="mb-1">
                    {item.text}
                  </p>
                  <Alert color={`light-${item.color}`} role="alert">
                    <p className={`txt-${item.color == "light" ? "dark" : item.color}`}>
                      This is a {" "}
                      <a className={`alert-link txt-${item.color}`} href={Href}>
                        {item.link}{" "}
                      </a>
                      with an example link.Check it out.
                    </p>
                  </Alert>
                </Fragment>
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LinkLightAlerts;
