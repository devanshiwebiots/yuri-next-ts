import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, ImagePath, MollyBoake, ScrollableList } from "@/Constants";
import { ScrollableData } from "@/Data/UiKits/Lists";
import Image from "next/image";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { DynamicScrollableLists } from "./DynamicScrollableLists";

const ScrollableLists = () => {
  return (
    <Col xxl="4">
      <Card className="title-line">
        <CommonCardHeader title={ScrollableList} subTitle={ScrollableData} />
        <CardBody>
          <ListGroup className="main-lists-content scrollbar-wrapper custom-scrollbar">
            <ListGroupItem tag="a" className="list-group-item-action active list-hover-primary" href={Href}>
              <div className="list-wrapper gap-0">
                <Image  width={55} height={55} className="list-img" src={`${ImagePath}/user/9.jpg`} alt="profile" />
                <div className="list-content">
                  <h6 className="txt-dark">{MollyBoake}</h6>
                  <p>MollyBoake@rhyta.com</p>
                  <small className="txt-dark">5 days ago</small>
                </div>
              </div>
            </ListGroupItem>
            <DynamicScrollableLists />
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ScrollableLists;
