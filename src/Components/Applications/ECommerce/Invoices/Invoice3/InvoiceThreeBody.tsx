import { InvoiceThreeData } from "@/Data/Ecommerce";

export default function InvoiceThreeBody() {
  return (
    <>
      {InvoiceThreeData.map((data, i) => (
        <tr key={i}>
          <td style={{ padding: "18px 15px 18px 0", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid var(--recent-dashed-border)" }}>
            <span style={{ width: 3, height: 37, backgroundColor: `${data.color}` }} />
            <ul style={{ padding: 0, margin: 0, listStyle: "none" }} className="simple-list">
              <li>
                <h4 style={{ fontWeight: 600, margin: "4px 0px", fontSize: 18, color: "#009DB5" }}>{data.title}</h4>
                <span style={{ color: "var(--normal-gray)", opacity: "0.8", fontSize: 16 }}>{data.detail}</span>
              </li>
            </ul>
          </td>
          <td style={{ padding: "18px 15px", width: "12%", textAlign: "center", borderBottom: "1px solid var(--recent-dashed-border)" }}>
            <span style={{ color: "var(--normal-gray)", opacity: "0.8" }}>{data.quantity}</span>
          </td>
          <td style={{ padding: "18px 15px", width: "12%", textAlign: "center", borderBottom: "1px solid var(--recent-dashed-border)" }}>
            <span style={{ color: "var(--normal-gray)", opacity: "0.8" }}>${data.price}</span>
          </td>
          <td style={{ padding: "18px 15px", width: "12%", textAlign: "center", borderBottom: "1px solid var(--recent-dashed-border)" }}>
            <span style={{ color: "var(--normal-gray)", opacity: "0.8" }}>${data.total}</span>
          </td>
        </tr>
      ))}
    </>
  );
}
