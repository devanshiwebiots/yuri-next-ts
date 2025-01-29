import { Apply, CheckOut, ContinueShopping, TotalPrice } from "@/Constants";
import { useAppSelector } from "@/ReduxToolkit/Hooks";
import { useRouter } from "next/navigation";
import { Button, Input, InputGroup } from "reactstrap";
import { getallCardTotal } from "../CustomFunctions";

const CartAction = () => {
  const { cart } = useAppSelector((state) => state.cartData);
  const { symbol } = useAppSelector((state) => state.product);
  
  const router = useRouter();
  return (
    <>
      <tr>
        <td colSpan={4}>
          <InputGroup>
            <Input className="me-2" type="text" placeholder="Enter coupan code" />
            <Button as="a" color="primary" className="text-white">
              {Apply}
            </Button>
          </InputGroup>
        </td>
        <td className="total-amount">
          <h4 className="m-0 text-end">
            <span className="f-w-700">{TotalPrice} :</span>
          </h4>
        </td>
        <td>
          <span>
            {symbol}
            {getallCardTotal(cart)}
          </span>
        </td>
      </tr>
      <tr>
        <td className="text-end" colSpan={5}>
          <Button color="warning" onClick={() => router.push(`/applications/ecommerce/product`)} className="cart-btn-transform">
            {ContinueShopping}
          </Button>
        </td>
        <td>
          <Button color="success" onClick={() => router.push(`/applications/ecommerce/checkout`)} className="cart-btn-transform">
            {CheckOut}
          </Button>
        </td>
      </tr>
    </>
  );
};

export default CartAction;
