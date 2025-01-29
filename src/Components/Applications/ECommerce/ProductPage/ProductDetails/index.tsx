import { ProductTittle } from "@/Constants";
import { ProductDetail } from "@/Data/Ecommerce";
import { useAppSelector } from "@/ReduxToolkit/Hooks";
import { Card, CardBody, Col } from "reactstrap";
import { ProductColor } from "./ProductColor";
import { ProductDetailButton } from "./ProductDetailButton";
import { ProductRating } from "./ProductRating";
import { ProductSocial } from "./ProductSocial";
import { ProductTable } from "./ProductTable";

const ProductDetails = () => {
  const { symbol } = useAppSelector((state) => state.product);

  return (
    <Col xxl="5" className="box-col-6 order-xxl-0 order-1">
      <Card>
        <CardBody>
          <div className="product-page-details">
            <h2>{ProductTittle}</h2>
          </div>
          <div className="product-price">
            {symbol}26.00<del>{symbol}350.00 </del>
          </div>
          <ProductColor />
          <p>{ProductDetail}</p>
          <hr />
          <ProductTable />
          <ProductSocial />
          <ProductRating />
          <ProductDetailButton />
        </CardBody>
      </Card>
    </Col>
  );
};
export default ProductDetails;
