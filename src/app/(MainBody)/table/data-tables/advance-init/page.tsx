'use client'
import dynamic from "next/dynamic";
const DynamicBodyContent = dynamic(() => import("@/Components/Tables/DataTable/AdvanceInit"), {
  ssr: false,
});

const AdvanceInItTable = () => {
  return <DynamicBodyContent />;
};

export default AdvanceInItTable;
