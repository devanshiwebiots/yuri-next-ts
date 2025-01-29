import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AboutUs, Blog, ContactUs, Href, PillsTab } from "@/Constants";
import { PillsTabData } from "@/Data/UiKits/Tabs";
import React, { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap";
import { PillsTabContent } from "./PillsTabContent";

const PillsTabs = () => {
  const [basicTab, setBasicTab] = useState("3");
  return (
    <Col sm="12" xxl="6">
      <Card className="height-equal title-line">
        <CommonCardHeader title={PillsTab} subTitle={PillsTabData} />
        <CardBody>
          <Nav pills className="nav-success">
            <NavItem><NavLink href={Href} className={basicTab === "1" ? "active" : ""} onClick={() => setBasicTab("1")}>{AboutUs}</NavLink></NavItem>
            <NavItem><NavLink href={Href} className={basicTab === "2" ? "active" : ""} onClick={() => setBasicTab("2")}>{ContactUs}</NavLink></NavItem>
            <NavItem><NavLink href={Href} className={basicTab === "3" ? "active" : ""} onClick={() => setBasicTab("3")}>{Blog}</NavLink></NavItem>
          </Nav>
          <PillsTabContent basicTab={basicTab}/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillsTabs;
