import CommonDropdown from "@/CommonComponents/CommonDropdown";
import SvgIcon from "@/CommonComponents/CommonIcons/CommonSvgIcons";
import { DailyTaskData } from "@/Data/General/Dashboard/Project";
import { Button, Card, CardBody, CardHeader, Col } from "reactstrap";

const DailyTask = () => {
  return (
    <Col xl="3" md="6" className="box-col-3">
      <Card className=" title-line">
        <CardHeader className="card-no-border">
          <div className="header-top">
            <div>
              <h2>Daily Task</h2>
            </div>
            <div className="card-header-right-icon">
              <CommonDropdown />
            </div>
          </div>
        </CardHeader>
        <CardBody className=" notification daily-task pt-0">
          <ul>
            {DailyTaskData.map((item, i) => (
              <li key={i} className="d-flex align-items-center">
                <div className={`activity-dot-${item.category}`} />
                <div className="task-content ms-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <h6>{item.title}</h6>
                      <span className="f-light f-w-500 f-12">
                        <SvgIcon iconId="clock-2" />
                        <span>{item.time}</span>
                      </span>
                    </div>
                    <Button color="lighten-primary">Remind Me</Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DailyTask;
