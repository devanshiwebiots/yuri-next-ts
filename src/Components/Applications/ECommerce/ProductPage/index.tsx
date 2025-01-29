import React, { useEffect } from "react";
import { Card, Container, Row } from "reactstrap";
import ImageSlider from "./ImageSlider";
import { useAppDispatch } from "@/ReduxToolkit/Hooks";
import { fetchProductApiData } from "@/ReduxToolkit/Reducers/ProductSlice";
import ProductDetails from "./ProductDetails";
import BrandDetail from "./BrandDetail";
import ClothsDetails from "./ClothsDetails";

const ProductPageContainer = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductApiData());
  }, []);

  return (
    <Container fluid>
      <div>
        <Row className="product-page-main p-0">
          <ImageSlider />
          <ProductDetails />
          <BrandDetail />
        </Row>
        <Card>
          <Row className="product-page-main">
            <ClothsDetails />
          </Row>
        </Card>
      </div>
    </Container>
  );
};

export default ProductPageContainer;
