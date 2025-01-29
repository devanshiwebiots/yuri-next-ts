import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ListsWithNumber } from "@/Constants";
import { ListNumberData, ListNumberDataList } from "@/Data/UiKits/Lists";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const ListsWithNumbers = () => {
  return (
    <Col xxl="4" sm="12">
    <Card className="title-line">
      <CommonCardHeader title={ListsWithNumber} subTitle={ListNumberData} />
      <CardBody>
        <ListGroup numbered>
          <ListGroupItem className="txt-primary fw-bold">Known for delivery of useful and usable solutions</ListGroupItem>
          {ListNumberDataList.map(({ color, text }, index) => (
             <ListGroupItem className={`txt-${color} fw-bold`} key={index}>{text}</ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  </Col>
  )
};

export default ListsWithNumbers;