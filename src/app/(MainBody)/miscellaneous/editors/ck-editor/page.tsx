'use client'
import dynamic from "next/dynamic";
const DynamicBodyContent = dynamic(() => import("@/Components/Miscellaneous/Editors/CkEditor"), {
  ssr: false,
});

const CkEditor = () => {
  return <DynamicBodyContent />;
};

export default CkEditor;
