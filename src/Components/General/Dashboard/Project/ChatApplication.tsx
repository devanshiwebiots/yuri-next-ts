import SvgIcon from "@/CommonComponents/CommonIcons/CommonSvgIcons";
import { ImagePath } from "@/Constants";
import Image from "next/image";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";

const ChatApplication = () => {
  return (
    <Col xl="5">
      <Card className=" height-equal title-line">
        <Row>
          <Col xl="12" xxl="6" sm="6" className="box-col-12 col-xxl-100">
            <CardHeader className="card-no-border">
              <h2>Chat Application</h2>
              <span className="f-w-500">Live Chart</span>
            </CardHeader>
            <CardBody className="pt-0 chat-app-wrapper">
              <div className="project-details">
                <div className="d-flex gap-2">
                  <Image height={44} width={44} src={`${ImagePath}/dashboard-3/user/13.png`} alt="user" />
                  <div>
                    <h4 className="f-w-500">Brooklyn Simmons</h4>
                    <span className="f-12 f-light f-w-500">Web Manager</span>
                  </div>
                </div>
                <p className="f-w-500 f-light">Bring your teams, work, and apps together from anywhere in one tool with github. Customize Workflows.</p>
                <ul className="light-card budget-details">
                  <li>
                    <h3 className="f-w-600">21 Oct</h3>
                    <span className="f-12 f-w-500 f-light">Due Date</span>
                  </li>
                  <li>
                    <h3 className="f-w-600">$78,320</h3>
                    <span className="f-12 f-w-500 f-light">Budget</span>
                  </li>
                </ul>
                <div className="d-flex gap-sm-2 gap-1">
                  <Button color="lighten-primary" className="link-with-icon" >
                    View Project
                    <SvgIcon iconId="arrow-two-tone" />
                  </Button>
                  <div className="customers">
                    <ul>
                      <li className="d-inline-block">
                        <img className="img-30 rounded-circle" src={`${ImagePath}/dashboard-3/user/1.png`} alt="user" />
                      </li>
                      <li className="d-inline-block">
                        <img className="img-30 rounded-circle" src={`${ImagePath}/dashboard-3/user/2.png`} alt="user" />
                      </li>
                      <li className="d-inline-block">
                        <img className="img-30 rounded-circle" src={`${ImagePath}/dashboard-3/user/3.png`} alt="user" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardBody>
          </Col>
          <Col xxl="6" sm="6" className="box-col-none d-xxl-none2">
            <CardBody className="project-banner">
              <img className="img-fluid" src={`${ImagePath}/dashboard-3/banner.png`} alt="banner" />
            </CardBody>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default ChatApplication;
