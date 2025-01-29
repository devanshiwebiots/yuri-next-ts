import { useRef } from "react";
import { Card, CardBody, Container, Table } from "reactstrap";
import CommonInvoiceSign from "../Common/CommonInvoiceSign";
import Print from "../Common/Print";
import InvoiceFiveHeader from "./InvoiceFiveHeader";
import InvoiceNumber from "./InvoiceNumber";
import InvoiceTable from "./InvoiceTable";
import { useReactToPrint } from "react-to-print";

export default function Invoice5Container() {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    contentRef,
  });

  return (
    <Container>
      <div ref={contentRef}>
        <Card className="invoice-2">
          <CardBody>
            <Table className="custom-scrollbar" responsive borderless>
              <tbody>
                <tr>
                  <InvoiceFiveHeader />
                </tr>
                <tr>
                  <InvoiceNumber />
                </tr>
                <tr>
                  <InvoiceTable />
                </tr>
                <tr style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: 36 }}>
                  <CommonInvoiceSign />
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
