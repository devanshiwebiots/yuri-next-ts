import React, { useState } from "react";
import { Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink } from "reactstrap";
import { JustifytabContent } from "./JustifytabContent";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, IOTDeveloper, JustifyTab, AdminProfilesForNewEmployees, UxDesigner, WebDesigner } from "@/Constants";
import { JustifyTabsData } from "@/Data/UiKits/Tabs";

const JustifyTabs = () => {
  const [basicTab, setBasicTab] = useState("2");
  return (
    <Col xxl="6">
      <Card className="title-line">
        <CommonCardHeader title={JustifyTab} subTitle={JustifyTabsData} />
        <CardBody>
          <CardHeader className="d-flex justify-content-between align-items-center flex-wrap gap-2 pb-2 p-0">
            <p><em className="txt-danger">{AdminProfilesForNewEmployees}</em></p>
            <Nav pills className="nav-primary">
              <NavItem><NavLink href={Href} className={basicTab === "1" ? "active" : ""} onClick={() => setBasicTab("1")}>{WebDesigner}</NavLink></NavItem>
              <NavItem><NavLink href={Href} className={basicTab === "2" ? "active" : ""} onClick={() => setBasicTab("2")}>{UxDesigner}</NavLink></NavItem>
              <NavItem><NavLink href={Href} className={basicTab === "3" ? "active" : ""} onClick={() => setBasicTab("3")}>{IOTDeveloper}</NavLink></NavItem>
            </Nav>
          </CardHeader>
            <JustifytabContent basicTab={basicTab}/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JustifyTabs;
