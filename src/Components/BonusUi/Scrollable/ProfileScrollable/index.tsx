import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import ScrollBar from "react-perfect-scrollbar";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, ImagePath, ProfileScrollableTitle } from "@/Constants";
import { ProfileScroll, ProfileScrollList } from "@/Data/BonusUi/Scrollable";
import Image from "next/image";

const ProfileScrollable = () => {
  return (
    <Col xxl="4" md="6">
      <Card className="title-line">
        <CommonCardHeader title={ProfileScrollableTitle} subTitle={ProfileScroll} />
        <CardBody>
          <ScrollBar className="scroll-demo scroll-b-none" style={{ width: "100%", height: "300px" }}>
            <ListGroup>
              <ListGroupItem tag="a" href={Href} className="list-group-item-action list-hover-primary">
                <Image width={40} height={40} className="rounded-circle" src={`${ImagePath}/user/3.png`} alt="user" />
                Gloria D. Acheson
              </ListGroupItem>
              {ProfileScrollList.map(({ text, src }, index) => (
                <ListGroupItem tag="a" href={Href} className="list-group-item-action list-hover-primary" key={index}>
                  <Image width={40} height={40} className="rounded-circle" src={`${ImagePath}/${src}`} alt="user" />
                  {text}
                </ListGroupItem>
              ))}
            </ListGroup>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProfileScrollable;
