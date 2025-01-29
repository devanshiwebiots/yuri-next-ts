import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FlushList } from "@/Constants";
import { FlushData, FlushListData } from "@/Data/UiKits/Lists";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const FlushLists = () => {
  return (
    <Col xl="4" md="12">
      <Card className="title-line">
        <CommonCardHeader title={FlushList} subTitle={FlushData} />
        <CardBody>
          <ListGroup flush>
            <ListGroupItem><i className="icofont icofont-arrow-right"></i>PRODUCT</ListGroupItem>
            {FlushListData.map((item, index) => (
              <ListGroupItem key={index}><i className="icofont icofont-arrow-right"></i>{item}</ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FlushLists;
