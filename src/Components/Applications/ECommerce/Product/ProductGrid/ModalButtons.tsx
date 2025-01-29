import { AddToCartButton, ViewDetails } from "@/Constants";
import { useAppDispatch, useAppSelector } from "@/ReduxToolkit/Hooks";
import { addToCartData } from "@/ReduxToolkit/Reducers/CartSlice";
import { ModalButtonsProp, ProductItemInterface } from "@/Types/EcommerceType";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const ModalButtons :React.FC<ModalButtonsProp> = ({ singleProduct, quantity }) => {
  
  const dispatch = useAppDispatch();
const router = useRouter();

  const AddToCarts = (item: ProductItemInterface) => {
    dispatch(addToCartData({ item, quantity }));
    router.push(`/ecommerce/cart`);
  };
    
  return (
    <div className="addcart-btn">
      <Link href={`/applications/ecommerce/cart`} className="btn btn-primary text-white me-3" onClick={() => AddToCarts(singleProduct)}>
        {AddToCartButton}
      </Link>
      <Link href={`/applications/ecommerce/product-page`} className="btn btn-primary text-white">
        {ViewDetails}
      </Link>
    </div>
  );
};
