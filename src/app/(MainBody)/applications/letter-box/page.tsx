"use client";
import dynamic from "next/dynamic";

const DynamicBodyContent = dynamic(() => import("@/Components/Applications/LatterBox"), {
  ssr: false,
});

const LetterBox = () => {
  return <DynamicBodyContent />;
};

export default LetterBox;
