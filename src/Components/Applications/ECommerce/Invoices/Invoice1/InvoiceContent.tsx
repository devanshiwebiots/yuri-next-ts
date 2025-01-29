import { useAppSelector } from "@/ReduxToolkit/Hooks";
import { DollarSign } from "react-feather";
import { Table } from "reactstrap";

export default function InvoiceContent() {
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
    <td style={{padding:0}}>
      <Table className="bill-content w-100" borderless>
        <tbody>
          <tr>
            <td style={{ width: "36%", padding:0 }}>
              <span style={{ opacity: "0.8", color: "var(--body-light-font-color)" }}>{"Billed To"}</span>
              <h6 style={{ width: "46%" }}>{"yuri Matchett Vandelay Group LTD"}</h6>
            </td>
            <td style={{ width: "21%", padding:0 }}>
              <span style={{ opacity: "0.8", color: "var(--body-light-font-color)" }}>{"Invoice Date"}</span>
              <h6>09/03/2024</h6>
            </td>
            <td style={{ padding:0 }}>
              <span style={{ opacity: "0.8", color: "var(--body-light-font-color)" }}>{"Invoice Number"}</span>
              <h6>#VL25000365</h6>
            </td>
            <td style={{ textAlign: "right" , padding:0 }}>
              <span style={{ opacity: "0.8", color: "var(--body-light-font-color)" }}>{"Amount Dus (USD)"}</span>
              <h2>
                $ {getallCardTotal(cart) + (getallCardTotal(cart) * tax) / 100}
              </h2>
            </td>
          </tr>
          <tr>
            <td style={{ width: "36%" , padding:0 }}>
              <h6 style={{ width: "63%", paddingTop: 20 }}>{"2118 Thornridge Cir. Syracuse, Connecticut 35624, United State"}</h6>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
}
