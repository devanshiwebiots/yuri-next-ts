import SvgIcon from "@/CommonComponents/CommonIcons/CommonSvgIcons";
import { Href } from "@/Constants";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import ProjectStatusTable from "./ProjectStatusTable";

const ProjectStatus = () => {
  return (
    <Col xl="7">
      <Card className=" height-equal title-line">
        <CardHeader className="card-no-border">
          <div className="header-top">
            <h2>Projects Status</h2>
            <div className="card-header-right-icon">
              <a className="link-with-icon" href={Href}>
                View all
                <SvgIcon iconId="arrow-two-tone" />
              </a>
            </div>
          </div>
        </CardHeader>
        <CardBody className="project-table p-0 custom-scrollbar">
          <ProjectStatusTable className="custom-scrollbar" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectStatus;
