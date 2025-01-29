import CommonDropdown from "@/CommonComponents/CommonDropdown";
import SvgIcon from "@/CommonComponents/CommonIcons/CommonSvgIcons";
import { ActiveProjectsHeading } from "@/Constants";
import { TrendingUp } from "react-feather";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const ActiveProjects = () => {
  return (
    <Col xl="3" sm="6">
      <Card className=" project-widget widget-1 title-line">
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
                <TrendingUp />
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
          <div className="progress" style={{ height: 5 }}>
            <div className="progress-bar bg-success" role="progressbar" style={{ width: "56%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActiveProjects;
