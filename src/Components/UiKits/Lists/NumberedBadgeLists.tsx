import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { NumberedBadgeList } from "@/Constants";
import { NumberBadgeData, NumberBadgeDataList } from "@/Data/UiKits/Lists";
import { Badge, Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const NumberedBadgeLists = () => {
  return (
    <Col xxl="4" md="6">
      <Card className="title-line">
        <CommonCardHeader title={NumberedBadgeList} subTitle={NumberBadgeData} />
        <CardBody>
          <ListGroup numbered>
            <ListGroupItem className="d-flex justify-content-between align-items-start flex-wrap">
              <div className="ms-2 me-auto">Stella Nowland</div>
              <Badge color="warning" pill className="p-2">Freelance</Badge>
            </ListGroupItem>
            {NumberBadgeDataList.map(({ title, color, text }, index) => (
              <ListGroupItem className="d-flex justify-content-between align-items-start flex-wrap" key={index}>
                <div className="ms-2 me-auto">{title}</div>
                <Badge color={color} pill className="p-2">{text}</Badge>
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NumberedBadgeLists;
