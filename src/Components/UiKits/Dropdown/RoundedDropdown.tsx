import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, Primary, RoundedDropdowns } from "@/Constants";
import React, { useState } from "react";
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import CommonDropDown from "./Common/CommonDropDown";
import { RoundedDatas, RoundedList } from "@/Data/UiKits/Dropdown";

const RoundedDropdown = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
  
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={RoundedDropdowns} subTitle={RoundedDatas} />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret color="primary" className="rounded-pill">{Primary}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                  <DropdownItem href={Href}>Dark</DropdownItem>
                  <DropdownItem href={Href}>Light</DropdownItem>
                  <DropdownItem href={Href}>Lighter</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
            {RoundedList.map((data, index) => (
              <CommonDropDown key={index} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
};

export default RoundedDropdown;