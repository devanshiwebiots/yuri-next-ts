//@ts-nocheck
import { Card, CardBody, Col, UncontrolledAccordion } from "reactstrap";
import CommonAccordionItem from "../Common/CommonAccordionItem";
import { StaticAccordion } from "./StaticAccordion";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { OutlineAccordions } from "@/Constants";
import { OutlineData, OutlineList } from "@/Data/UiKits/Accordion";

const OutlineAccordion = () => {
  return (
    <Col xl="6" sm="12">
      <Card>
        <CommonCardHeader title={OutlineAccordions} subTitle={OutlineData} />
        <CardBody>
          <UncontrolledAccordion stayOpen className="dark-accordion">
            <StaticAccordion/>
            {OutlineList.map((data, index) => (
              <CommonAccordionItem item={data} key={index} />
            ))}
          </UncontrolledAccordion>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineAccordion;
