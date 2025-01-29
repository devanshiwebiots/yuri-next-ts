import { InvoiceFourDetails } from "@/Data/Ecommerce";
import { Table } from "reactstrap";

export default function InvoiceFourDetail() {
  return (
    <td style={{padding:0}}>
      <Table style={{ width: "100%", borderSpacing: 4, marginBottom: 20 }}>
        <tbody>
          <tr>
            {InvoiceFourDetails.map((data, i) => (
              <td style={{ background: "var(--light-shade-primary)", padding: "15px 25px" }} key={i}>
                <p style={{ fontSize: 16, fontWeight: 500, color: "var(--normal-gray)", opacity: "0.8", margin: 0, lineHeight: 2 }}>{data.title} :</p>
                <span style={{ fontSize: 16, fontWeight: 600 }}>{data.value}</span>
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
    </td>
  );
}
