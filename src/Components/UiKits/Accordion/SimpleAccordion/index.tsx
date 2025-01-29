//@ts-nocheck
import { useState } from "react";
import { Accordion, Card, CardBody, Col } from "reactstrap";
import CommonAccordionItem from "../Common/CommonAccordionItem";
import { StaticAccordion } from "./StaticAccordion";
import { SimpleAccordions } from "@/Constants";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AccordionData, AccordionList } from "@/Data/UiKits/Accordion";

export const SimpleAccordion = () => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => (open === id ? setOpen() : setOpen(id));

  return (
    <Col sm="12" xl="6">
      <Card className="height-equal title-line basic-accordion ">
        <CommonCardHeader title={SimpleAccordions} subTitle={AccordionData} />
        <CardBody className="collapse-space">
          <Accordion open={open} toggle={toggle} className="dark-accordion">  
            <StaticAccordion />
            {AccordionList.map((data, index) => (
              <CommonAccordionItem item={data} key={index} />
            ))}
          </Accordion>
        </CardBody>
      </Card>
    </Col>
  );
};
