/* eslint-disable @next/next/no-img-element */
import { ImagePath } from "@/Constants";
import { GeneralCardsData } from "@/Data/General/Dashboard/ECommerce";
import Image from "next/image";
import { TrendingUp } from "react-feather";
import { Card, CardBody, Col, Row } from "reactstrap";

const GeneralCards = () => {
  return (
    <Col xl="3" sm="6" md="4" className=" order-xl-v col-xl-50 order-sm-i">
      <Row>
        {GeneralCardsData.map((item, i) => (
          <Col xs="12" key={i}>
            <Card className="widget-1">
              <CardBody className={`${i != 2 && "common-space"} order-card`}>
                <div className="customer-month">
                  <span className="f-w-500 f-light">{item.title}</span>
                  <h2>{item.heading}</h2>
                  <div className="order-content">
                    <span className="f-light f-12 f-w-500">Last week </span>
                    <div>
                      <span className={`txt-${item.color} f-12 f-w-600`}>
                        <TrendingUp className={`stroke-${item.color}`} />
                        {item.percentage}
                      </span>
                    </div>
                  </div>
                </div>
                {i == 2 && (
                  <div className="customer-profile">
                    <span className="f-w-500">Today's Heroes</span>
                    <ul className="d-inline-block">
                      <li className="d-inline-block">
                        <div className="profile-letter bg-warning">
                          <span className="f-w-600 txt-white f-12">A</span>
                        </div>
                      </li>
                      <li className="d-inline-block">
                        <Image height={50} width={50} className="img-fluid rounded-circle" src={`${ImagePath}/dashboard/user/3.jpg`} alt="user" />
                      </li>
                      <li className="d-inline-block">
                        <Image height={50} width={50} className="img-fluid rounded-circle" src={`${ImagePath}/dashboard/user/3.jpg`} alt="user" />
                      </li>
                      <li className="d-inline-block">
                        <div className="profile-letter bg-success">
                          <span className="f-w-600 txt-white f-12">R</span>
                        </div>
                      </li>
                      <li className="d-inline-block">
                        <Image height={50} width={50} className="img-fluid rounded-circle" src={`${ImagePath}/dashboard/user/6.jpg`} alt="user" />
                      </li>
                      <li className="d-inline-block">
                        <div className="light-card profile-letter">
                          <span className="f-w-600 f-light f-12">+80</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
                {i != 2 && (
                  <div className="delivery-image">
                    <img className="img-fluid" src={`${ImagePath}/dashboard-2/orders/${item.image}.png`} alt="order" />
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default GeneralCards;
