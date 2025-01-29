import { Col, Modal, ModalHeader, Row } from "reactstrap";
import { useEffect, useState } from "react";
import { ModalProductDetails } from "./ModalProductDetails";
import { ModalQuantity } from "./ModalQuantity";
import { ModalButtons } from "./ModalButtons";
import { ProductItemInterface, ProductModalInterfaceType } from "@/Types/EcommerceType";
import { useAppSelector } from "@/ReduxToolkit/Hooks";
import Image from "next/image";
import { ImagePath } from "@/Constants";

const ProductModal :React.FC<ProductModalInterfaceType> = ({ value, setOpenModal, dataId }) => {
  const [open, setOpen] = useState(value);
  const { productItem } = useAppSelector((state) => state.product);
  const [quantity, setQuantity] = useState<number>(1);
  const [singleProduct, setSingleProduct] = useState<ProductItemInterface | undefined | [] | any>([]);

  useEffect(() => {
    productItem.forEach((product: ProductItemInterface) => {
      if (product.id === dataId) setSingleProduct(product);
    });
  }, [productItem, dataId]);

  const onCloseModal = () => {
    setOpen(false);
    setOpenModal(false);
  };

  return (
    <Modal centered size="lg" wrapClassName="product-box" isOpen={open} toggle={onCloseModal}>
      <ModalHeader color='transparent' toggle={onCloseModal}>
        <Row className="product-box">
          <Col lg="6" className="product-img">
            <Image width={788} height={859} className="img-fluid" src={`${ImagePath}/ecommerce/${singleProduct.image}`} alt="image" />
          </Col>
          <Col lg="6" className="product-details text-start">
            <ModalProductDetails singleProduct={singleProduct} />
            <div className="product-qnty">
              <ModalQuantity quantity={quantity} setQuantity={setQuantity} />
              <ModalButtons singleProduct={singleProduct} quantity={quantity} />
            </div>
          </Col>
        </Row>
      </ModalHeader>
    </Modal>
  );
};
export default ProductModal;
