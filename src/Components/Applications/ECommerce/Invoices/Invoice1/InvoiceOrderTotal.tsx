import { useAppSelector } from "@/ReduxToolkit/Hooks";
import { DollarSign } from "react-feather";

export default function InvoiceOrderTotal() {
  const { cart } = useAppSelector((state) => state.cartData);
  const tax = 5;
  const getallCardTotal = (cartItems: any) => {
    let total = 0;
    for (var i = 0; i < cartItems.length; i++) {
      const itemQuantity = cartItems[i].quantity;
      const itemPrice = cartItems[i].price;
      if (itemQuantity !== undefined) {
        const items = itemQuantity * itemPrice;
        total = total + items;
      }
    }
    return total;
  };
  return (
    <>
      <tr>
        <td> </td>
        <td> </td>
        <td style={{ padding: "5px 0", paddingTop: 0 }}>
          <span style={{ color: "var(--body-light-font-color)" }}>Tax({tax}%)</span>
        </td>
        <td style={{ padding: "5px 0", textAlign: "right", paddingTop: 0 }}>
          <span>
            ${(getallCardTotal(cart) * tax) / 100}
          </span>
        </td>
      </tr>
      <tr>
        <td style={{padding:0}}> </td>
        <td style={{padding:0}}> </td>
        <td style={{ padding: "10px 0" }}>
          <span style={{ fontWeight: 600 }}>{"Amount Due (USD)"}</span>
        </td>
        <td style={{ padding: "10px 0", textAlign: "right" }}>
          <span style={{ fontWeight: 600 }}>
            ${getallCardTotal(cart) + (getallCardTotal(cart) * tax) / 100}
          </span>
        </td>
      </tr>
    </>
  );
}
