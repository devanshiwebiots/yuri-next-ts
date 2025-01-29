import { Href } from "@/Constants";
import { ClothsDetailsData } from "@/Data/Ecommerce";
import { useState } from "react";
import { Col, Nav, NavItem, NavLink } from "reactstrap";
import ClothsDetailsTabContent from "./ClothsDetailsTabContent";

const ClothsDetails = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <Col sm="12">
      <Nav color="primary" tabs className="border-tab nav-primary mb-0">
        {ClothsDetailsData.map((data, index) => (
          <NavItem key={index}>
            <NavLink href={Href} className={activeTab === index + 1 ? "active" : ""} onClick={() => setActiveTab(index + 1)}>
              {data}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <ClothsDetailsTabContent activeTab={activeTab} />
    </Col>
  );
};

export default ClothsDetails;
