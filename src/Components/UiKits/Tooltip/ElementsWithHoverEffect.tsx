import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { HTMLElementsWithHoverEffect, NotificationsReceived } from "@/Constants";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
import CommonTooltip from "./Common/CommonTooltip";
import { HoverTooltipData, HoverTooltipList } from "@/Data/UiKits/Tooltip";

const ElementsWithHoverEffect = () => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);
  
  return (
    <Col md="6">
      <Card className="title-line">
        <CommonCardHeader title={HTMLElementsWithHoverEffect} subTitle={HoverTooltipData} />
        <CardBody>
          <div className="common-flex">
            <Button id="Tooltip-12" className="bg-primary mb-0 me-0">{NotificationsReceived}</Button>
            <Tooltip isOpen={tooltip} toggle={toggle} placement="top" target="Tooltip-12"><i>Thank </i> <u>you</u></Tooltip>
            {HoverTooltipList.map((data) => (
              <CommonTooltip key={data.id} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ElementsWithHoverEffect;
