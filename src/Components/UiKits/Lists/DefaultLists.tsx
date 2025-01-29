import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DefaultList } from "@/Constants";
import { DefaultData, DefaultListData } from "@/Data/UiKits/Lists";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const DefaultLists = () => {
  return (
    <Col xl="4" md="6">
      <Card className="title-line">
        <CommonCardHeader title={DefaultList} subTitle={DefaultData} />
        <CardBody>
          <ListGroup>
            <ListGroupItem><i className="icofont icofont-arrow-right"></i>Logo Design</ListGroupItem>
            {DefaultListData.map((item, index) => (
              <ListGroupItem key={index}><i className="icofont icofont-arrow-right"></i>{item}</ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultLists;
