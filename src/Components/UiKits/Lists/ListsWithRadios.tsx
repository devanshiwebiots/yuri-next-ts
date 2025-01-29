import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ListsWithRadio } from "@/Constants";
import { ListRadioData, ListRadioDataList } from "@/Data/UiKits/Lists";
import { Card, CardBody, Col, Input, Label, ListGroup, ListGroupItem } from "reactstrap";

const ListsWithRadios = () => {
  return (
    <Col xxl="4" md="6">
      <Card className="title-line">
        <CommonCardHeader title={ListsWithRadio} subTitle={ListRadioData} />
        <CardBody>
          <ListGroup>
            <ListGroupItem>
              <Input className="me-1 active checkbox-danger" type="radio" defaultChecked name="radio"/>
              <Label check className="mb-0">Meditations</Label>
            </ListGroupItem>
            {ListRadioDataList.map(({ color, text,id }, index) => (
              <ListGroupItem key={index}>
                <Input className={`me-1 checkbox-${color}`} type="radio" id={`secondRadio-${id}`} name="radio"/>
                <Label check className="mb-0" htmlFor={`secondRadio-${id}`}>{text}</Label>
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ListsWithRadios;
