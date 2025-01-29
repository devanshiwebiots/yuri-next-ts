import SvgIcon from "@/CommonComponents/CommonIcons/CommonSvgIcons";
import { Follower, Following, Href, ImagePath, Posts } from "@/Constants";
import { SocialUserCardData, SocialUserData } from "@/Data/Users";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const UserCardsContainer = () => {
  return (
    <Container fluid>
      <Row className="user-cards-items">
        {SocialUserCardData.map((item) => (
          <Col sm="6" xxl="3" xl="4" className="col-ed-4 box-col-4" key={item.id}>
            <Card className="social-profile">
              <CardBody>
                <div className="social-img-wrap">
                  <div className="social-img">
                    <Image width={68} height={68} className="img-fluid" src={`${ImagePath}/${item.avatar}`} alt="user" />
                  </div>
                  <div className="edit-icon">
                    <SvgIcon iconId="profile-check" />
                  </div>
                </div>
                <div className="social-details">
                  <h5 className="mb-1">
                    <a href={Href}>{item.name}</a>
                  </h5>
                  <span className="f-light">{item.email}</span>
                  <ul className="card-social">
                    {SocialUserData.map((data, index) => (
                      <li key={index}>
                        <Link href={data.link}>
                          <i className={`fa ${data.iconClassName} me-0`}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="social-follow">
                    <li>
                      <h5 className="mb-0">{item.totalPost}</h5>
                      <span className="f-light">{Posts}</span>
                    </li>
                    <li>
                      <h5 className="mb-0">{item.follower}</h5>
                      <span className="f-light">{Follower}</span>
                    </li>
                    <li>
                      <h5 className="mb-0">{item.following}</h5>
                      <span className="f-light">{Following}</span>
                    </li>
                  </ul>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserCardsContainer;
