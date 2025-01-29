import TableHead from "@/CommonComponents/TableHead";
import { Card, CardBody, Col, Table } from "reactstrap";
import CommonCardHeader from "../../../../CommonComponents/CommonCardHeader";
import { ColoredHeadingTitle } from "../../../../Constants";
import {
    colorHeadData,
    headingSubTitle,
} from "../../../../Data/UiKits/Typography";
import ColoredHeadBody from "./ColoredHeadBody";

const ColoredHeadings = () => {
  return (
    <Col xxl={6}>
      <Card className="height-equal title-line">
        <CommonCardHeader
          title={ColoredHeadingTitle}
          subTitle={headingSubTitle}
        />
        <CardBody>
          <div className="table-responsive custom-scrollbar">
            <Table className="mb-0 typography-table">
              <TableHead headeData={colorHeadData} />
              <ColoredHeadBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColoredHeadings;
