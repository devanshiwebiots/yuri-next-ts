import { Button, Input, InputGroup, InputGroupText } from "reactstrap";
import { Quantity } from "@/Constants";
import { ChangeEvent } from "react";
import { ModalQuantityProp } from "@/Types/EcommerceType";

export const ModalQuantity :React.FC<ModalQuantityProp> = ({ quantity, setQuantity }) => {
  const minusQty = () => quantity > 1 && setQuantity(quantity - 1);
  const plusQty = () => quantity >= 1 && setQuantity(quantity + 1);
  const changeQty = (e: ChangeEvent<HTMLInputElement>) => setQuantity(parseInt(e.target.value));

  return (
    <>
      <h4 className="f-w-600 mb-2 mt-2">{Quantity}</h4>
      <fieldset>
        <InputGroup className="bootstrap-touchspin">
          <Button color="primary" className="btn-square bootstrap-touchspin-down" onClick={minusQty}>
            <i className="fa fa-minus text-white"></i>
          </Button>
          <Input className="touchspin text-center" type="text" name="quantity" value={quantity} onChange={(e) => changeQty(e)} />
          <Button color="primary" className="btn-square bootstrap-touchspin-up" onClick={plusQty}>
            <i className="fa fa-plus text-white"></i>
          </Button>
        </InputGroup>
      </fieldset>
    </>
  );
};