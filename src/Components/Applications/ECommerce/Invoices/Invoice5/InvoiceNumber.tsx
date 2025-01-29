import { BottomBorder } from "@/Constants";
import { Table } from "reactstrap";

export default function InvoiceNumber() {
  return (
    <td style={{padding:0}}>
      <Table style={{ width: "100%", borderSpacing: 4, marginBottom: 20 }}>
        <tbody>
          <tr className="back">
            <td style={{ background: "var(--light-shade-primary)", padding: "15px 25px" , borderBottom: 0 }}>
              <p style={{ fontSize: 16, fontWeight: 500, color: "var(--normal-gray)", opacity: "0.8", margin: 0, lineHeight: 2 }}>{"Date"} :</p>
              <span style={{ fontSize: 18, fontWeight: 600 }}>10 Mar, 2024</span>
            </td>
            <td style={{ background: "var(--light-shade-primary)", padding: "15px 25px" , borderBottom: 0}}>
              <p style={{ fontSize: 16, fontWeight: 500, color: "var(--normal-gray)", opacity: "0.8", margin: 0, lineHeight: 2 }}>{"Invoice No"} :</p>
              <span style={{ fontSize: 18, fontWeight: 600 }}>#VL25000365</span>
            </td>
            <td style={{ background: "var(--light-shade-primary)", padding: "15px 25px" , borderBottom: 0}}>
              <p style={{ fontSize: 16, fontWeight: 500, color: "var(--normal-gray)", opacity: "0.8", margin: 0, lineHeight: 2 }}>{"Account No"} :</p>
              <span style={{ fontSize: 18, fontWeight: 600 }}>0981234098765</span>
            </td>
            <td style={{ background: "var(--light-shade-primary)", padding: "15px 25px" , borderBottom: 0}}>
              <p style={{ fontSize: 16, fontWeight: 500, color: "var(--normal-gray)", opacity: "0.8", margin: 0, lineHeight: 2 }}>{"Due Amount"} :</p>
              <span style={{ fontSize: 18, fontWeight: 600 }}>$7860.00 </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
}
