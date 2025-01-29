import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Default, Large, Sizings, Small } from "@/Constants";
import { SizingDatas } from "@/Data/Forms";
import { Card, CardBody, Col, Input, InputGroup, InputGroupText } from "reactstrap";

const Sizing = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={Sizings} subTitle={SizingDatas} />
        <CardBody className="card-wrapper input-group-wrapper">
          <InputGroup size="sm">
            <InputGroupText id="inputGroup-sizing-sm">{Small}</InputGroupText>
            <Input type="text" />
          </InputGroup>
          <InputGroup size="default">
            <InputGroupText id="inputGroup-sizing-default">{Default}</InputGroupText>
            <Input type="text" />
          </InputGroup>
          <InputGroup size="lg">
            <InputGroupText id="inputGroup-sizing-lg">{Large}</InputGroupText>
            <Input type="text" />
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Sizing;
