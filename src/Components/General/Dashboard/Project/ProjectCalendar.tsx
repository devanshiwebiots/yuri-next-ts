import SvgIcon from "@/CommonComponents/CommonIcons/CommonSvgIcons";
import { Href, View } from "@/Constants";
import { MeetingsData, ProjectCalendarDates } from "@/Data/General/Dashboard/Project";
import Image from "next/image";
import { Button, Card, CardBody, CardHeader, Col, Table } from "reactstrap";

const ProjectCalendar = () => {
  return (
    <Col xxl="5" xl="6" lg="6" md="6" className="box-col-6">
      <Card className="height-equal title-line">
        <CardHeader className="card-no-border">
          <div className="header-top">
            <h2>Calendar</h2>
            <div className="card-header-right-icon">
              <a className="link-with-icon" href={Href}>
                Report
                <SvgIcon iconId="arrow-two-tone" />
              </a>
            </div>
          </div>
        </CardHeader>
        <CardBody className=" pt-0">
          <div className="calendar-wrapper">
            <ul className="calendar-date-list custom-scrollbar">
              {ProjectCalendarDates.map((item, i) => (
                <li key={i} className={`${item.isToday && "today-date"}`}>
                  <span className="f-12 f-light">{item.day}</span>
                  <h4 className="f-w-500">{item.date}</h4>
                </li>
              ))}
            </ul>
            <div className="table-responsive custom-scrollbar">
              <Table className="client-content">
                <tbody>
                  {MeetingsData.map((item, i) => (
                    <tr key={i}>
                      <td>
                        <Image height={50} width={50} className="img-fluid" src={item.imagePath} alt="client" />
                      </td>
                      <td>
                        <h4 className="mb-1">{item.title}</h4>
                        <ul className="client-sub-content">
                          <li className="d-flex">
                            <SvgIcon iconId="video" />
                            <span className="f-12 f-light f-w-500">Zoom Meeting</span>
                          </li>
                          <li className="d-flex">
                            <SvgIcon iconId="dashboard-clock" />
                            <span className="f-12 f-light f-w-500">09 am</span>
                          </li>
                          <li className="d-flex f-12 f-light f-w-500">
                            Lead by <span className="txt-warning">{item.leadBy}</span>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <Button tag={"a"} color="light" className="f-12 f-w-500">
                          {View}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectCalendar;
