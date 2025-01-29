import { ImagePath } from "@/Constants";
import Image from "next/image";

export default function CommonInvoiceSign() {
  return (
    <td style={{padding:0}}>
      <Image height={50} width={154} src={`${ImagePath}/email-template/invoice-3/sign.png`} alt="sign" />
      <span style={{ color: "#009DB5", display: "block", fontSize: 16, fontWeight: 600 }}>Laurine T. Ebbert</span>
      <span style={{ color: "var(--normal-gray)", display: "block", fontSize: 14, paddingTop: 5 }}>( Designer )</span>
    </td>
  );
}
