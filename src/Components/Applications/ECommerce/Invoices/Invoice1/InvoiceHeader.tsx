import { ImagePath } from "@/Constants";
import Image from "next/image";
import { Table } from "reactstrap";

export default function InvoiceHeader() {
  return (
    <td style={{padding:0}}>
      <Table className="table-wrapper custom-scrollbar logo-wrapper" borderless responsive>
        <tbody>
          <tr>
            <td style={{padding:0}}>
              <Image height={54} width={150} className="img-fluid for-light" src={`${ImagePath}/logo/logo.png`} alt="logo" style={{ width: "121px" }} />
              <Image height={54} width={150} className="img-fluid for-dark" src={`${ImagePath}/logo/logo_dark.png`} alt="logo" style={{ width: "121px" }} />
              <span style={{ color: "var(--body-light-font-color)", opacity: "0.8", display: "block", marginTop: 10 }}>202-555-0258</span>
            </td>
            <td className="address p-0" style={{ textAlign: "right", color: "var(--body-light-font-color)", opacity: "0.8", width: "16%" }}>
              <span>1982 Harvest Lane New York, NY12210 United State</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
}
