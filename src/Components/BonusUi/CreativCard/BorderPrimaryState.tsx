import { BryanOwens, GloriaAcheson, Href, ImagePath, PrimaryBorderState, TeresaMosteller } from "@/Constants";
import { BorderPrimaryData } from "@/Data/BonusUi/CreativeCard";
import Image from "next/image";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import CommonCreativeCardHeader from "./Common/CommonCreativeCardHeader";

const BorderPrimaryState = () => {
  return (
    <Col xxl="4" md="6">
      <Card className="height-equal">
        <CommonCreativeCardHeader headerClass="border-l-primary" title={PrimaryBorderState} subTitle={BorderPrimaryData} />
        <CardBody>
          <ListGroup>
            <ListGroupItem tag="a" className="list-group-item-action active" href={Href}><Image width={40} height={40} className="rounded-circle" src={`${ImagePath}/user/1.jpg`} alt="user" />{TeresaMosteller}</ListGroupItem>
            <ListGroupItem tag="a" className="list-group-item-action" href={Href}><Image width={40} height={40} className="rounded-circle" src={`${ImagePath}/user/3.png`} alt="user" />{GloriaAcheson}</ListGroupItem>
            <ListGroupItem tag="a" className="list-group-item-action" href={Href}><Image width={40} height={40} className="rounded-circle" src={`${ImagePath}/user/5.jpg`} alt="user" />{BryanOwens}</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderPrimaryState;
