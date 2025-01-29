import { ChangeEvent, useState } from "react";
import { SavedAddress, ShippingInformation, ShippingMethod } from "@/Constants";
import HomeAndOfficeAddress from "./HomeAndOfficeAddress";
import ShippingMethods from "./ShippingMethods";
import { BillingFormProp } from "@/Types/Form";
import { toast } from "react-toastify";

const ShippingFormContent :React.FC<BillingFormProp> = ({ callbackActive }) => {
  const [radioBoxValues, setRadioBoxValues] = useState({address: "",shippingMethod: "",});
  const { address, shippingMethod } = radioBoxValues;

  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setRadioBoxValues({ ...radioBoxValues, [name]: value });
  };

  const handleNextButton = () => {
    if (address !== "" && shippingMethod !== "") {
      callbackActive(3);
    } else {
      toast.error("Please fill all field after press next button");
    }
  };

  return (
    <>
      <h6>{ShippingInformation}</h6>
      <p className="f-light">Fill up the following information to send you the order</p>
      <div className="shipping-title">
        <h6 className="mb-2">{SavedAddress}</h6>
      </div>
      <HomeAndOfficeAddress radioBoxValues={radioBoxValues} getUserData={getUserData}/>
      <h6 className="mt-4 mb-2">{ShippingMethod}</h6>
      <ShippingMethods radioBoxValues={radioBoxValues} getUserData={getUserData} handleNextButton={handleNextButton}/>
    </>
  );
};

export default ShippingFormContent;
