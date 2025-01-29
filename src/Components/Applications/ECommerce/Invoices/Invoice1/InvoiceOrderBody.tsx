import { useAppSelector } from "@/ReduxToolkit/Hooks";
import { DollarSign } from "react-feather";
import InvoiceOrderTotal from "./InvoiceOrderTotal";

export default function InvoiceOrderBody() {
  const { cart } = useAppSelector((state) => state.cartData);
  const getCartTotal = (item: any) => {
    if (item.quantity) {
      return item.quantity * item.price;
    }
    return 0;
  };

  return (
    <>
      {cart &&
        cart.map((item) => (
          <tr style={{ boxShadow: "0px 10.9412px 10.9412px rgb(0 157 181 / 4%), 0px 9.51387px 7.6111px rgb(0 157 181 / 6%), 0px 5.05275px 4.0422px rgb(0 157 181 / 4%)", borderRadius: "5.47059px" }} key={item.id}>
            <td style={{ padding: "18px 15px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ minWidth: 7, height: 7, border: "4px solid #009DB5", background: "#fff", borderRadius: "100%", display: "inline-block" }} />
              <span>{item.name}</span>
            </td>
            <td style={{ padding: "18px 15px" }}>
              <span>
               $ {item.price}
              </span>
            </td>
            <td style={{ padding: "18px 15px" }}>
              <span>{item.total}</span>
            </td>
            <td style={{ padding: "18px 15px", textAlign: "right" }}>
              <span> {item.total !== undefined ? ` ${item.price * item.total}` : "Quantity not available"}</span>
            </td>
          </tr>
        ))}
      <tr>
        <td> </td>
        <td> </td>
        <td style={{ padding: "5px 0", paddingTop: 15 }}>
          <span style={{ color: "var(--body-light-font-color)" }}>{"Subtotal"}</span>
        </td>
        <td style={{ padding: "5px 0", textAlign: "right", paddingTop: 15 }}>
          <span>
           ${cart.reduce((total, item) => total + getCartTotal(item), 0)}
          </span>
        </td>
      </tr>
      <InvoiceOrderTotal />
    </>
  );
}
