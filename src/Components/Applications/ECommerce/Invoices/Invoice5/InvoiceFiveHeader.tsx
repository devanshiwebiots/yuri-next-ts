import { ImagePath } from "@/Constants";
import Image from "next/image";
import { Table } from "reactstrap";
import InvoiceAddress from "./InvoiceAddressDetails";
import InvoiceRightSide from "./InvoiceRightSide";

export default function InvoiceFiveHeader() {
  return (
    <td style={{padding:0}}>
      <Table style={{ width: "100%" }} borderless>
        <tbody>
          <tr style={{ padding: "0 0 5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <td style={{padding:0}}>
              <Image height={100} width={100} className="img-fluid for-light" src={`${ImagePath}/logo/logo.png`} alt="logo" style={{ width: "121px" }} />
              <Image height={100} width={100} className="img-fluid for-dark" src={`${ImagePath}/logo/logo_dark.png`} alt="logo" style={{ width: "121px" }} />
            </td>
            <td style={{padding:0}}>
              <InvoiceRightSide />
            </td>
          </tr>
          <tr style={{ display: "flex", justifyContent: "space-between" }}>
            <InvoiceAddress />
          </tr>
        </tbody>
      </Table>
    </td>
  );
}
