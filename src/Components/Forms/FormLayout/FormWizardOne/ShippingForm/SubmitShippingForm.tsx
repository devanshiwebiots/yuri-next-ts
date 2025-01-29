import { Href, ImagePath, OrderConfirmed, OrderID } from "@/Constants";
import Image from "next/image";

const SubmitShippingForm = () => {
  return (
      <div className="order-confirm">
        <Image width={150} height={150} src={`${ImagePath}/gif/successful.gif`} alt="popper"/>
        <h5>{OrderConfirmed}</h5>
        <p className="mb-0">An email with your orders specifics will be sent to you as order confirmation.</p>
        <p className="text-center f-w-500 mt-2">{OrderID}:
          <a className="text-decoration-underline" href={Href}>GE34598</a>
        </p>
      </div>
  );
};

export default SubmitShippingForm;
