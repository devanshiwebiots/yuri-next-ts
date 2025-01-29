import CommonDropdown from "@/CommonComponents/CommonDropdown";
import SvgIcon from "@/CommonComponents/CommonIcons/CommonSvgIcons";
import { ActiveProjectsHeading } from "@/Constants";
import { TrendingUp } from "react-feather";
import { Card, CardBody, CardHeader, Col, Progress } from "reactstrap";

const ActiveProjects = () => {
  return (
    <Col xl="3" md="4" sm="6">
      <Card className="project-widget widget-1 title-line">
        <CardHeader className="card-no-border pb-0">
          <div className="header-top">
            <div>
              <h3 className="f-w-600">{ActiveProjectsHeading}</h3>
              <span className="f-12 f-light f-w-500">Projects this month</span>
            </div>
            <div className="card-header-right-icon">
              <CommonDropdown />
            </div>
          </div>
          <div className="widget-middle-content">
            <div className="d-flex align-items-center">
              <h2>106</h2>
              <span className="f-w-500 txt-warning f-12">
                <TrendingUp className="me-1" />
                <span>+50%</span>
              </span>
            </div>
          </div>
        </CardHeader>
        <CardBody className="widget-bottom-content">
          <div className="progress-details">
            <ul>
              <li className="bg-secondary">
                <SvgIcon iconId="car-white" />
              </li>
              <li className="bg-success">
                <SvgIcon iconId="game" />
              </li>
              <li className="bg-primary">
                <SvgIcon iconId="home-white" />
              </li>
            </ul>
            <h6 className="txt-success f-w-600">56%</h6>
          </div>
          <Progress value={56} className={`bg-light-success`} style={{ width: "100%" , height: "5px" }}></Progress>

        </CardBody>
      </Card>
    </Col>
  );
};

export default ActiveProjects;
