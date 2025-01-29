"use client";
import dynamic from "next/dynamic";

const DynamicBodyContent = dynamic(() => import("@/Components/Applications/ECommerce/AddProduct"), {
  ssr: false,
});

const AddProducts = () => {
  return <DynamicBodyContent />;
};

export default AddProducts;
