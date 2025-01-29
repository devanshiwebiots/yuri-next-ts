import { InvoiceFourData, InvoiceTableHeader } from "@/Data/Ecommerce";
import { DollarSign } from "react-feather";
import { Table } from "reactstrap";

export default function InvoiceFourTable() {
  return (
    <td style={{ padding: 0 }}>
      <Table style={{ width: "100%", borderSpacing: 0 }}>
        <thead>
          <tr style={{ background: "#009DB5" }}>
            {InvoiceTableHeader.map((data, i) => (
              <th
                style={{
                  border: "none",
                  padding: "18px 15px",
                  textAlign: data === "Description" ? "left" : "center",
                  position:
                    data === "Description" || data === "Subtotal"
                      ? "relative"
                      : undefined,
                  borderTopRightRadius: data === "Subtotal" ? 10 : 0,
                  borderTopLeftRadius: data === "Description" ? 10 : 0,
                }}
                key={i}
              >
                <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>
                  {data}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {InvoiceFourData.map((data, i) => (
            <tr key={i}>
              <td style={{ padding: 30 }}>
                <h4
                  style={{
                    fontWeight: 600,
                    margin: "4px 0px",
                    fontSize: 18,
                    color: "#009DB5",
                  }}
                >
                  {data.title}
                </h4>
                <span style={{ opacity: "0.8", fontSize: 16 }}>
                  {data.detail}
                </span>
              </td>
              <td style={{ width: "12%", textAlign: "center", padding: 0 }}>
                <span style={{ opacity: "0.8" }}>${data.price}.00</span>
              </td>
              <td style={{ width: "12%", textAlign: "center", padding: 0 }}>
                <span style={{ opacity: "0.8" }}>{data.quantity}</span>
              </td>
              <td style={{ width: "12%", textAlign: "center", padding: 0 }}>
                <span
                  style={{ color: "#009DB5", fontWeight: 600, opacity: "0.9" }}
                >
                  {data.total}.00
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </td>
  );
}
