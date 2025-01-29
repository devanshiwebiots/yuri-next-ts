import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, LinkColorInDarkTheme } from "@/Constants";
import {
  LinkDarkAlertsData,
  LinkDarkAlertsSubTitle,
} from "@/Data/UiKits/Alerts";
import { Fragment } from "react";
import { Alert, Card, CardBody, Col, Row } from "reactstrap";

const LinkDarkAlerts = () => {
  return (
    <Col xl="12">
      <Card className="card title-line">
        <CommonCardHeader
          title={LinkColorInDarkTheme}
          subTitle={LinkDarkAlertsSubTitle}
        />
        <CardBody>
          <Row>
            <Col xl="6">
              <p className="mb-1">Primary Alert</p>
              <Alert color="primary" className="dark" role="alert">
                <p>
                  This is a {' '}
                  <a className="alert-link text-white" href="#">
                    primary alert
                  </a>
                  {' '} with an example link.Check it out.
                </p>
              </Alert>
              {LinkDarkAlertsData.slice(1, 4).map((item, index) => (
                <Fragment key={index}>
                  <p className="mb-1">
                    {item.text}
                  </p>
                  <Alert color={item.color} className="dark" role="alert">
                    <p>
                      This is a{' '}
                      <a
                        className="alert-link text-lowercase text-white"
                        href={Href}
                      >
                        {item.text}
                      </a>
                     {' '}  with an example link.Check it out.
                    </p>
                  </Alert>
                </Fragment>
              ))}
            </Col>
            <Col xl="6">
              {LinkDarkAlertsData.slice(4).map((item, index) => (
                <Fragment key={index}>
                  <p className="mb-1">
                    {item.text}
                  </p>
                  <Alert color={item.color} className="dark" role="alert">
                    <p>
                      This is a{' '}
                      <a
                        className="alert-link text-lowercase text-white"
                        href={Href}
                      >
                        {item.text}
                      </a>
                      {' '} with an example link.Check it out.
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

export default LinkDarkAlerts;
