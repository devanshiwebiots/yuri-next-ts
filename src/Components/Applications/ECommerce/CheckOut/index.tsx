import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BillingDetails } from "@/Constants";
import React from "react";
import { Card, CardBody, Container, Row } from "reactstrap";
import CheckoutTableData from "./CheckoutTableData";
import ProductCheckout from "./ProductCheckout";

const CheckOutContainer = () => {
  return (
    <Container fluid className="checkout">
      <Card>
        <CommonCardHeader title={BillingDetails} />
        <CardBody>
          <Row>
            <CheckoutTableData />
            <ProductCheckout />
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default CheckOutContainer;
