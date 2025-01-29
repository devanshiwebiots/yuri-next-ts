import CommonDropdown from "@/CommonComponents/CommonDropdown";
import { Development, Href, Marketing, Orderdetails, WebDesigner } from "@/Constants";
import { ActivitiesData } from "@/Data/General/Dashboard/ECommerce";
import { Badge, Card, CardBody, CardHeader, Col } from "reactstrap";

const Activities = ({ col }: { col?: string }) => {
    return (
        <Col xl={col ? Number(col) : 12} md="6">
            <Card className="title-line widget-acitivity">
                <CardHeader className="card-no-border">
                    <div className="header-top">
                        <h2>
                            Activities<span className="f-12 f-w-500 f-light d-block">780,765 Sales</span>
                        </h2>
                        <div className="card-header-right-icon detail-option">
                            <CommonDropdown dropdownToggle={Orderdetails} dropdownItems={[WebDesigner, Development, Marketing]} />
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="pt-0 notification to-do-list activities-wrapper">
                    <ul className="activity-details custom-scrollbar">
                        {ActivitiesData.map((item, i) => (
                            <li key={i} className="d-flex align-items-center">
                                <div color="transparent" className={`activity-dot-${item.dotColor}`} />
                                <div className="d-flex w-100 align-items-center">
                                    <div>{item.h6 ? (<h6 className="">{item.message} <a href={Href}>{item.code}</a></h6>) : <span className="f-w-500 f-12 f-light">{item.message}</span>}</div>
                                    <Badge color="transparent" className="ms-auto f-light">
                                        {item.timestamp}{" "}
                                    </Badge>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardBody>
            </Card>
        </Col>
    );
};

export default Activities;
