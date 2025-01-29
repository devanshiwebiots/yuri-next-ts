import { ImagePath } from "@/Constants";
import Image from "next/image";
import { useRef } from "react";
import { Card, CardBody, Container, Table } from "reactstrap";
import Print from "../Common/Print";
import InvoiceContent from "./InvoiceContent";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceOrder from "./InvoiceOrder";
import { useReactToPrint } from "react-to-print";

export default function Invoice1Container() {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    contentRef,
  });
  return (
    <Container>
      <div ref={contentRef}>
        <Card className="invoice-1">
          <CardBody>
            <Table className="table-wrapper" borderless>
              <tbody>
                <tr>
                  <InvoiceHeader />
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>
                    <Image height={175} width={1140} className="banner-image w-100" src={`${ImagePath}/email-template/invoice-1/1.png`} alt="background" />
                  </td>
                </tr>
                <tr>
                  <InvoiceContent />
                </tr>
                <tr>
                  <InvoiceOrder />
                </tr>
              </tbody>
              <tfoot>
                <tr style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "12px" }}>
                  <td style={{ padding: 0 }}>
                    <Image height={50} width={150} src={`${ImagePath}/email-template/invoice-1/sign.png`} alt="sign" />
                    <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: 200, marginBottom: 10 }} />
                    <span style={{ color: "rgba(82, 82, 108, 0.8)" }}>{"Authorized Sign"}</span>
                  </td>
                  <td style={{ padding: 0 }}>
                    <Print handlePrint={handlePrint} />
                  </td>
                </tr>
              </tfoot>
            </Table>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
}
