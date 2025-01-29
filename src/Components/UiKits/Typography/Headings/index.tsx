import { Card, CardBody, Col, Table } from "reactstrap";
import CommonCardHeader from "../../../../CommonComponents/CommonCardHeader";
import TableHead from "../../../../CommonComponents/TableHead";
import { HeadingsTitle } from "../../../../Constants";
import {
    headingSubTitle,
    headingTableHead,
} from "../../../../Data/UiKits/Typography";
import HeadingBody from "./HeadingBody";

const Headings = () => {
  return (
    <Col xxl={6}>
      <Card className="height-equal title-line">
        <CommonCardHeader title={HeadingsTitle} subTitle={headingSubTitle} />
        <CardBody>
          <div className="table-responsive custom-scrollbar">
            <Table className="mb-0 typography-table">
              <TableHead headeData={headingTableHead} />
              <HeadingBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Headings;
