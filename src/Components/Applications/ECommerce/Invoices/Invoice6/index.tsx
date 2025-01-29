import { useRef } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Invoice6Button from "./Invoice6Button";
import InvoiceSixHeader from "./InvoiceSixHeader";
import InvoiceSixTable from "./InvoiceSixTable";
import UserDetails from "./UserDetails";
import { useReactToPrint } from "react-to-print";

export default function Invoice6Container() {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    contentRef,
  });

  return (
    <Container>
      <div ref={contentRef}>
        <Row>
          <Col sm={12}>
            <Card>
              <CardBody>
                <div className="invoice">
                  <div>
                    <InvoiceSixHeader />
                    <hr />
                    <UserDetails />
                    <InvoiceSixTable />
                  </div>
                  <Invoice6Button handlePrint={handlePrint} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
