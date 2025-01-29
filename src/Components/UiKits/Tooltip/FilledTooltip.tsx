import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FilledTooltips, TooltipPrimary } from "@/Constants";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
import CommonTooltip from "./Common/CommonTooltip";
import { FillTooltipData, FillTooltipList } from "@/Data/UiKits/Tooltip";

const FilledTooltip = () => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);

  return (
    <Col md="6">
      <Card className="title-line">
        <CommonCardHeader title={FilledTooltips} subTitle={FillTooltipData} />
        <CardBody>
          <div className="common-flex">
            <Button outline color="primary" id="Tooltip-16" className="mb-0 me-0">{TooltipPrimary}</Button>
            <Tooltip isOpen={tooltip} toggle={toggle} placement="top" target="Tooltip-16">Tooltip Primary</Tooltip>
            {FillTooltipList.map((data) => (
              <CommonTooltip key={data.id} outline={true} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FilledTooltip;
