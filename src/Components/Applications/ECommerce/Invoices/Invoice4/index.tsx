import { useRef } from "react";
import { Card, CardBody, Container, Table } from "reactstrap";
import CommonInvoiceSign from "../Common/CommonInvoiceSign";
import Print from "../Common/Print";
import InvoiceFourDetail from "./InvoiceFourDetail";
import InvoiceFourHeader from "./InvoiceFourHeader";
import InvoiceFourTable from "./InvoiceFourTable";
import InvoiceTotal from "./InvoiceTotal";
import { useReactToPrint } from "react-to-print";

export default function Invoice4Container() {
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
                  <InvoiceFourHeader />
                </tr>
                <tr>
                  <InvoiceFourDetail />
                </tr>
                <tr>
                  <InvoiceFourTable />
                </tr>
                <tr>
                  <td style={{ height: 3, width: "100%", background: "linear-gradient(90deg, #009DB5 20.61%, #83BF6E 103.6%)", display: "block", padding: 0 }} />
                </tr>
                <tr>
                  <InvoiceTotal />
                </tr>
                <tr style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                  <CommonInvoiceSign />
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
