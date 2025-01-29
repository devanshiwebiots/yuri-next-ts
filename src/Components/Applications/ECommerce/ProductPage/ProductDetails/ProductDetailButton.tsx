import { AddToCart, AddToWishList, BuyNow } from "@/Constants";
import { useAppSelector } from "@/ReduxToolkit/Hooks";
import { useRouter } from "next/navigation";
import { Button } from "reactstrap";

export const ProductDetailButton = () => {
  
  const router = useRouter();
  return (
    <div className="m-t-15 common-flex">
      <Button color="primary" onClick={() => router.push(`/applications/ecommerce/cart`)} title="">
        <i className="fa fa-shopping-basket me-1"></i>
        {AddToCart}
      </Button>
      <Button color="success" onClick={() => router.push(`/applications/ecommerce/checkout`)} title="">
        <i className="fa fa-shopping-cart me-1"></i>
        {BuyNow}
      </Button>
      <Button color="secondary" onClick={() => router.push(`/applications/ecommerce/wishlist`)}>
        <i className="fa fa-heart me-1"></i>
        {AddToWishList}
      </Button>
    </div>
  );
};
