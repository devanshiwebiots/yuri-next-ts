
export default function InvoiceTableTotal() {
  return (
    <>
      <tr>
        <td style={{ borderBottom: 0 , padding:0}}/>
        <td style={{ borderBottom: 0 , padding:0}}/>
        <td style={{ borderBottom: 0 , padding:0}}/>
        <td style={{ textAlign: "center", padding: "35px 0 18px" , borderBottom: 0 }}>
          <span style={{ color: "var(--normal-gray)", opacity: "0.8", fontWeight: 600 }}>{"Subtotal"} </span>
        </td>
        <td style={{ textAlign: "center", background: "var(--light-shade-primary)", display: "block", padding: "35px 0 18px" , borderBottom: 0 }}>
          <span style={{ color: "#009DB5", fontWeight: 600, opacity: "0.9" }}>$6100.00</span>
        </td>
      </tr>
      <tr>
        <td style={{ borderBottom: 0 , padding:0}}/>
        <td style={{ borderBottom: 0 , padding:0}}/>
        <td style={{ borderBottom: 0 , padding:0}}/>
        <td style={{ width: "12%", textAlign: "center" , borderBottom: 0}}>
          <span style={{ color: "var(--normal-gray)", opacity: "0.8", fontWeight: 600 }}>{"VAT / Tax 15% "}</span>
        </td>
        <td style={{ textAlign: "center", background: "var(--light-shade-primary)", display: "block", paddingBottom: 18 , borderBottom: 0 }}>
          <span style={{ color: "#009DB5", fontWeight: 600, opacity: "0.9" }}>$50.00</span>
        </td>
      </tr>
      <tr>
        <td style={{ borderBottom: 0 , padding:0}}/>
        <td style={{ borderBottom: 0 , padding:0}}/>
        <td style={{borderBottom: 0 , padding:0}}> </td>
        <td style={{ width: "12%", textAlign: "center" , borderBottom: 0 }}>
          <span style={{ color: "var(--normal-gray)", opacity: "0.8", fontWeight: 600 }}>{"Discount"} </span>
        </td>
        <td style={{ textAlign: "center", background: "var(--light-shade-primary)", display: "block", paddingBottom: 18 , borderBottom: 0 }}>
          <span style={{ color: "009DB5", fontWeight: 600, opacity: "0.9" }}>$30.00</span>
        </td>
      </tr>
      <tr>
        <td style={{ borderBottom: 0 , padding:0}}/>
        <td style={{ borderBottom: 0 , padding:0}}/>
        <td style={{ borderBottom: 0 , padding:0}}/>
        <td style={{ width: "12%", textAlign: "center", borderBottom: 0 , padding:0}}>
          <span style={{ color: "var(--normal-gray)", opacity: "0.8", fontWeight: 600 }}>{"Total Due"}</span>
        </td>
        <td style={{ textAlign: "center", background: "var(--light-shade-primary)" , borderBottom: 0 , padding:0}}>
          <span style={{ color: "#ffffff", fontWeight: 600, opacity: "0.9", background: "var(--normal-gray)", padding: "12px 37px", marginTop: 0, display: "block" }}>$6120.00</span>
        </td>
      </tr>
    </>
  );
}
