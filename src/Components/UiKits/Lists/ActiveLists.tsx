import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ActiveData, ActiveListData } from "@/Data/UiKits/Lists";
import { ActiveList } from "@/Constants";

const ActiveLists = () => {
  return (
    <Col xl="4" md="6">
      <Card className="title-line">
        <CommonCardHeader title={ActiveList} subTitle={ActiveData} />
        <CardBody>
          <ListGroup>
            <ListGroupItem className="active bg-warning-light"><i className="icofont icofont-arrow-right"></i>UI Kits</ListGroupItem>
            {ActiveListData.map((item, index) => (
            <ListGroupItem key={index}><i className="icofont icofont-arrow-right"></i>{item}</ListGroupItem>
          ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActiveLists;
