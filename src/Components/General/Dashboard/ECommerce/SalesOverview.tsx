import CommonDropdown from "@/CommonComponents/CommonDropdown";
import SvgIcon from "@/CommonComponents/CommonIcons/CommonSvgIcons";
import { SalesOverviewData } from "@/Data/General/Dashboard/ECommerce";
import { TrendingUp } from "react-feather";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

const SalesOverview = () => {
  return (
    <Col xl="12">
      <Card className=" title-line sales-details">
        <CardHeader className="card-no-border sales-bg">
          <div className="header-top">
            <div>
              <h2>Sales Overview </h2>
            </div>
            <div className="card-header-right-icon">
              <CommonDropdown />
            </div>
          </div>
        </CardHeader>
        <CardBody className=" pt-0 custom-scrollbar">
          <Row className="row-cols-4 row-cols-xl-iii row-cols-md-iii">
            {SalesOverviewData.map((item, i) => (
              <Col key={i} className={item?.colClass ? item?.colClass : ''}>
                <div className="sales-overview widget-1">
                  <div className="common-box">
                    <div className={`rounded-circle2 ${item.trendIcon}`}>
                      <div className="sales-icon">
                        <SvgIcon iconId={item.icon} />
                      </div>
                    </div>
                    <div>
                      <h3 className="f-w-600">{item.amount}</h3>
                      <div className="sale-content">
                        <span className="f-w-500 f-light f-12">{item.category}</span>
                        <div className="d-flex align-items-center gap-1">
                          <TrendingUp className={`stroke-${item.trendIcon}`} />
                          <span className={`txt-${item.trendIcon} f-w-600 f-12`}>{item.trendPercentage} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SalesOverview;
