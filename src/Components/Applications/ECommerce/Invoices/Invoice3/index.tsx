import { useRef } from "react";
import { Card, CardBody, Container, Table } from "reactstrap";
import Print from "../Common/Print";
import InvoiceBankTransfer from "./InvoiceBankTransfer";
import InvoiceClientDetail from "./InvoiceClientDetail";
import InvoiceThreeHeader from "./InvoiceThreeHeader";
import InvoiceThreeTable from "./InvoiceThreeTable";
import { useReactToPrint } from "react-to-print";

export default function Invoice3Container() {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    contentRef,
  });

  return (
    <Container>
      <div ref={contentRef}>
        <Card className="invoice-2">
          <CardBody>
            <Table className="table-wrapper custom-scrollbar" responsive borderless>
              <tbody>
                <tr>
                  <InvoiceThreeHeader />
                </tr>
                <tr>
                  <InvoiceClientDetail />
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>
                    <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: 20 }} />
                  </td>
                </tr>
                <tr>
                  <InvoiceThreeTable />
                </tr>
                <tr>
                  <InvoiceBankTransfer />
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>
                    <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: 24 }} />
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>
                    <Print handlePrint={handlePrint} />
                  </td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
}
