import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ListsWithCheckboxs } from "@/Constants";
import { CheckboxDataList, ListCheckboxData } from "@/Data/UiKits/Lists";
import { Card, CardBody, Col, Input, Label, ListGroup, ListGroupItem } from "reactstrap";

const ListsWithCheckbox = () => {
  return (
    <Col xxl="4" md="6">
      <Card className="title-line">
        <CommonCardHeader title={ListsWithCheckboxs} subTitle={ListCheckboxData} />
        <CardBody className="dark-list">
          <ListGroup>
            <ListGroupItem>
              <Input className="me-1 checkbox-primary active" type="checkbox" id="firstCheckbox"/>
              <Label check className="txt-primary mb-0" htmlFor="firstCheckbox">Auto Start</Label>
            </ListGroupItem>
            {CheckboxDataList.map(({ color,text,id }, index) => (
              <ListGroupItem key={index}>
                <Input className={`me-1 checkbox-${color}`} type="checkbox" id={`firstCheckbox-${id}`} />
                <Label check className={`txt-${color} mb-0`} htmlFor={`firstCheckbox-${id}`}>{text}</Label>
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ListsWithCheckbox;
