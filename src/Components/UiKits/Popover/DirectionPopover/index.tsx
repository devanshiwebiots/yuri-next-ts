import { PopoverDirections, PopoverOnTop } from "@/Constants";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import { DirectionData, DirectionList } from "@/Data/UiKits/Popover";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import CommonPopover from "../CommonPopover";

const PopoverDirection = () => {
  const [popover, setPopover] = useState(false);
  const toggle = () => setPopover(!popover);

  return (
    <Col sm="12">
      <Card className="title-line">
        <CommonCardHeader title={PopoverDirections} subTitle={DirectionData} />
        <CardBody className="common-flex popover-wrapper">
          <Button color="warning" className="example-popover mb-0 me-0" id="Popover-4">{PopoverOnTop}</Button>
          <Popover isOpen={popover} toggle={toggle} placement="top" target="Popover-4" trigger="click">
            <PopoverHeader>Popover On Top</PopoverHeader>
            <PopoverBody>Popovers need the tooltip plugin considering that a dependency.</PopoverBody>
          </Popover>
          {DirectionList.map((data) => (
            <CommonPopover key={data.id} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default PopoverDirection;
