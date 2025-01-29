import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Inputs, WithInputTypes } from "@/Constants";
import { WithInputData } from "@/Data/UiKits/Dropdown";
import React, { useState } from "react";
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownMenu, DropdownToggle, Input, InputGroup,DropdownItem,InputGroupText } from "reactstrap";

const WithInputType = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  
  return (
    <Col xl="4" sm="6">
      <Card className="height-equal">
        <CommonCardHeader title={WithInputTypes} subTitle={WithInputData} />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret color="warning" className="text-white">{Inputs}</DropdownToggle>
                <DropdownMenu className="dropdown-block dropdown-wrapper dark-input-type">
                  <DropdownItem>
                      <InputGroup className="rounded-0 border-0 shadow-none">
                        <InputGroupText className='ps-0'>
                            <Input className="mt-0 me-2" type="checkbox" value="" />
                            <span>Default checkbox</span>
                        </InputGroupText>
                      </InputGroup>
                      <InputGroup className="rounded-0 border-0 shadow-none">
                        <InputGroupText className='ps-0'>
                          <Input className="mt-0 me-2" type="radio" value="" />
                          <span>Default radio</span>
                          </InputGroupText>
                      </InputGroup>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithInputType;